/* ========================================
   PlacementOS — sync.js
   Conflict-Free Deep Merge Background Syncing
   ======================================== */

const firebaseConfig = {
  apiKey: "AIzaSyDj7T1LxwCpDuCHSIAj5lli4Y_Y2f73j7A",
  authDomain: "placementos-prasanna.firebaseapp.com",
  projectId: "placementos-prasanna",
  storageBucket: "placementos-prasanna.firebasestorage.app",
  messagingSenderId: "913628894297",
  appId: "1:913628894297:web:ae140c0c5251ff4d170d48"
};

function normalizeSyncCode(code) {
  if (!code) return '';
  return code.trim()
             .toUpperCase()
             .replace(/O/g, '0')
             .replace(/I/g, '1')
             .replace(/L/g, '1');
}

// Utility to parse any timestamp safely to numeric milliseconds
function parseTime(val) {
  if (!val) return 0;
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const num = Number(val);
    if (!isNaN(num)) return num;
    const parsed = Date.parse(val);
    return isNaN(parsed) ? 0 : parsed;
  }
  if (val.seconds) { // Firebase Timestamp object
    return val.seconds * 1000 + Math.floor((val.nanoseconds || 0) / 1000000);
  }
  if (typeof val.toDate === 'function') {
    return val.toDate().getTime();
  }
  return 0;
}

// Update the sync status indicator in the topbar dynamically
function updateSyncStatusUI(status, color) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  el.style.color = color;
  if (status === 'synced') {
    el.innerHTML = '<i class="fas fa-cloud" style="color:#2ecc71;"></i> Synced';
  } else if (status === 'saving') {
    el.innerHTML = '<i class="fas fa-sync-alt fa-spin" style="color:#f1c40f;"></i> Saving...';
  } else if (status === 'syncing') {
    el.innerHTML = '<i class="fas fa-sync-alt fa-spin" style="color:#f1c40f;"></i> Syncing...';
  } else if (status === 'error') {
    el.innerHTML = '<i class="fas fa-exclamation-triangle" style="color:#e74c3c;"></i> Sync Error';
  } else if (status === 'offline') {
    el.innerHTML = '<i class="fas fa-cloud-slash" style="color:var(--text2);"></i> Offline';
  }
}

// Deep merge local and server states to prevent progress loss
function deepMergeStates(local, server) {
  const merged = { ...server, ...local };
  
  // 1. Merge DSA solved lists
  if (local.dsa && server.dsa) {
    const seen = new Set();
    const mergedDSA = [];
    server.dsa.forEach(p => {
      if (p && p.name) {
        seen.add(p.name);
        mergedDSA.push(p);
      }
    });
    local.dsa.forEach(p => {
      if (p && p.name && !seen.has(p.name)) {
        seen.add(p.name);
        mergedDSA.push(p);
      }
    });
    merged.dsa = mergedDSA;
  }

  // 2. Merge checkmark maps
  const mergeChecks = (key) => {
    merged[key] = {};
    if (server[key]) Object.assign(merged[key], server[key]);
    if (local[key]) Object.assign(merged[key], local[key]);
  };
  mergeChecks('accenturePlanChecks');
  mergeChecks('accentureCodingChecks');
  mergeChecks('arrayPlanChecks');
  
  // 3. Merge notes and code snippets (keep longer entries to avoid empty overwrites)
  const mergeTexts = (key) => {
    merged[key] = {};
    const combinedKeys = new Set([
      ...Object.keys(server[key] || {}),
      ...Object.keys(local[key] || {})
    ]);
    combinedKeys.forEach(id => {
      const localVal = local[key] ? (local[key][id] || '') : '';
      const serverVal = server[key] ? (server[key][id] || '') : '';
      merged[key][id] = (localVal.length >= serverVal.length) ? localVal : serverVal;
    });
  };
  mergeTexts('accenturePlanNotes');
  mergeTexts('accenturePlanCodes');
  mergeTexts('accentureCodingNotes');
  mergeTexts('accentureCodingCodes');
  mergeTexts('arrayPlanNotes');
  mergeTexts('arrayPlanCodes');
  
  // 4. Merge XP and Level
  merged.level = Math.max(Number(local.level) || 1, Number(server.level) || 1);
  merged.xp = Math.max(Number(local.xp) || 0, Number(server.xp) || 0);
  merged.streak = Math.max(Number(local.streak) || 0, Number(server.streak) || 0);
  
  // 5. Merge Study Hours map
  if (local.hours || server.hours) {
    merged.hours = {};
    const allDays = new Set([
      ...Object.keys(server.hours || {}),
      ...Object.keys(local.hours || {})
    ]);
    allDays.forEach(day => {
      const localHr = local.hours ? (local.hours[day] || 0) : 0;
      const serverHr = server.hours ? (server.hours[day] || 0) : 0;
      merged.hours[day] = Math.max(localHr, serverHr);
    });
  }

  // 6. Set timestamp to newest
  const localTime = parseTime(local.updatedAt);
  const serverTime = parseTime(server.updatedAt);
  merged.updatedAt = Math.max(localTime, serverTime, Date.now());
  
  return merged;
}

let db = null;

const localSavedStr = localStorage.getItem('placementOS_v2');
let localStateData = {};
try {
  localStateData = localSavedStr ? JSON.parse(localSavedStr) : {};
} catch(e) {}

const isLocalDatabaseEmpty = !localSavedStr || Object.keys(localStateData).length === 0;

let syncCode = localStorage.getItem('placementOS_sync_code');

if (isLocalDatabaseEmpty) {
  syncCode = '0S-DSHGG0';
  try {
    localStorage.setItem('placementOS_sync_code', syncCode);
  } catch(e) {}
} else if (syncCode) {
  syncCode = normalizeSyncCode(syncCode);
  try {
    localStorage.setItem('placementOS_sync_code', syncCode);
  } catch(e) {}
} else {
  syncCode = '0S-DSHGG0';
  try {
    localStorage.setItem('placementOS_sync_code', syncCode);
  } catch(e) {}
}

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase sync initialized with code:", syncCode);
    
    // Start initial pull
    const startSyncInit = () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('force_backup') === 'true') {
        setTimeout(forceBackupToCloudUrl, 1500);
      } else {
        setTimeout(syncPull, 1000); // Pull 1s after load to not block UI
      }
      renderSyncUI();
    };

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', startSyncInit);
    } else {
      startSyncInit();
    }
  } catch (e) {
    console.error("Firebase initialization failed:", e);
    updateSyncStatusUI('offline', 'var(--text2)');
  }
} else {
  updateSyncStatusUI('offline', 'var(--text2)');
}

// Helper to generate a random code (excluding confusing characters)
function generateSyncCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'OS-';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Pull data from Firestore and perform automatic merge
function syncPull(isManual = false) {
  if (!db || !syncCode) {
    updateSyncStatusUI('offline', 'var(--text2)');
    if (isManual && typeof toast === 'function') toast("⚠️ Sync offline: Firebase not initialized.", "error");
    return;
  }
  
  updateSyncStatusUI('syncing', '#f1c40f');
  
  db.collection('sync_states').doc(syncCode).get().then(doc => {
    if (doc.exists) {
      const serverData = doc.data();
      const localSaved = localStorage.getItem('placementOS_v2');
      let localState = {};
      try {
        localState = localSaved ? JSON.parse(localSaved) : {};
      } catch (e) {}
      
      let serverState = {};
      try {
        serverState = JSON.parse(serverData.data);
      } catch(e) {}

      const serverUpdatedAt = parseTime(serverData.updatedAt);
      const localUpdatedAt = parseTime(localState.updatedAt);
      
      console.log("syncPull comparison: server =", serverUpdatedAt, "local =", localUpdatedAt);
      
      if (serverUpdatedAt !== localUpdatedAt) {
        console.log("Sync mismatch detected. Merging states...");
        const mergedState = deepMergeStates(localState, serverState);
        const mergedStr = JSON.stringify(mergedState);
        
        try {
          localStorage.setItem('placementOS_v2', mergedStr);
          localStorage.setItem('placementOS_v2_backup', mergedStr);
        } catch(e) {}
        
        if (typeof S !== 'undefined') {
          Object.assign(S, mergedState);
        }
        
        // Push merged state back to cloud
        syncPush(mergedState).then(() => {
          updateSyncStatusUI('synced', '#2ecc71');
          console.log("Merged state successfully updated on cloud.");
          
          // Reload page to apply changes
          setTimeout(() => {
            location.reload();
          }, 300);
        }).catch(() => {
          updateSyncStatusUI('error', '#e74c3c');
        });
      } else {
        updateSyncStatusUI('synced', '#2ecc71');
        if (isManual && typeof toast === 'function') {
          toast("✅ Already in sync with cloud!");
        }
      }
    } else {
      // First time sync for this code, push local data
      const localSaved = localStorage.getItem('placementOS_v2');
      if (localSaved) {
        try {
          syncPush(JSON.parse(localSaved)).then(() => {
            updateSyncStatusUI('synced', '#2ecc71');
            if (isManual && typeof toast === 'function') {
              toast("📤 Progress initialized & backed up to cloud!");
            }
          }).catch(() => {
            updateSyncStatusUI('error', '#e74c3c');
          });
        } catch (e) {
          updateSyncStatusUI('error', '#e74c3c');
        }
      } else {
        updateSyncStatusUI('synced', '#2ecc71');
      }
    }
  }).catch(err => {
    console.warn("Sync pull failed:", err);
    updateSyncStatusUI('error', '#e74c3c');
    if (isManual && typeof toast === 'function') {
      toast("❌ Sync failed. Check internet connection.", "error");
    }
  });
}

// Push data to Firestore
function syncPush(state) {
  if (!db || !syncCode || !state) return Promise.reject("Sync offline");
  
  updateSyncStatusUI('saving', '#f1c40f');
  
  // Update state timestamp
  state.updatedAt = parseTime(state.updatedAt) || Date.now();
  
  const payload = {
    data: JSON.stringify(state),
    updatedAt: state.updatedAt
  };
  
  return db.collection('sync_states').doc(syncCode).set(payload)
    .then(() => {
      console.log("Successfully pushed state to server sync ID:", syncCode);
      updateSyncStatusUI('synced', '#2ecc71');
    })
    .catch(err => {
      console.warn("Sync push failed (offline or permission issue):", err);
      updateSyncStatusUI('error', '#e74c3c');
      throw err;
    });
}

// Change the sync code (link devices)
function changeSyncCode(newCode) {
  if (!newCode) return;
  newCode = normalizeSyncCode(newCode);
  if (newCode === syncCode) return;
  
  syncCode = newCode;
  try {
    localStorage.setItem('placementOS_sync_code', syncCode);
  } catch(e) {}
  
  // Pull the data immediately
  if (db) {
    updateSyncStatusUI('syncing', '#f1c40f');
    db.collection('sync_states').doc(syncCode).get().then(doc => {
      if (doc.exists) {
        const serverData = doc.data();
        try {
          localStorage.setItem('placementOS_v2', serverData.data);
          localStorage.setItem('placementOS_v2_backup', serverData.data);
        } catch(e) {}
        location.reload();
      } else {
        location.reload();
      }
    });
  } else {
    location.reload();
  }
}

// Render the sync code in the UI
function renderSyncUI() {
  let sidebar = document.getElementById('sidebar');
  if (sidebar) {
    let syncPill = document.getElementById('sync-pill');
    if (!syncPill) {
      syncPill = document.createElement('div');
      syncPill.id = 'sync-pill';
      syncPill.style.cssText = 'padding: 12px 16px; margin: 16px 12px 0; background: rgba(108,99,255,0.08); border: 1px solid rgba(108,99,255,0.25); border-radius: 10px; font-size: 12px; color: var(--text2); display: flex; flex-direction: column; gap: 6px;';
      sidebar.appendChild(syncPill);
    }
    
    syncPill.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:600; font-size:11.5px; color:var(--accent);"><i class="fas fa-sync-alt"></i> Background Sync</span>
        <button onclick="promptSyncCode()" style="background:none; border:none; color:var(--accent2); font-weight:700; font-size:10.5px; cursor:pointer; padding:0;">Link Device</button>
      </div>
      <div style="font-size:10.5px; margin-top:2px;">Sync Code: <b style="color:var(--text); letter-spacing:0.5px;">${syncCode}</b></div>
      <div style="display:flex; gap:6px; margin-top:6px; width:100%;">
        <button onclick="manualSyncTrigger()" style="flex:1; border:1px solid rgba(108,99,255,0.3); background:none; color:var(--text); font-size:10px; padding:5px; border-radius:5px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:4px;"><i class="fas fa-sync"></i> Sync</button>
        <button onclick="forceBackupToCloud()" style="flex:1; border:1px solid rgba(46,204,113,0.3); background:rgba(46,204,113,0.05); color:#2ecc71; font-size:10px; padding:5px; border-radius:5px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:4px;" title="Upload local progress to cloud backup"><i class="fas fa-cloud-upload-alt"></i> Backup</button>
        <button onclick="forceRestoreFromCloud()" style="flex:1; border:1px solid rgba(255,118,117,0.3); background:rgba(255,118,117,0.05); color:#ff7675; font-size:10px; padding:5px; border-radius:5px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:4px;" title="Overwrite local data with cloud data"><i class="fas fa-cloud-download-alt"></i> Restore</button>
      </div>
    `;
  }
}

function promptSyncCode() {
  const code = prompt("🔄 Link Devices:\nEnter the Sync Code from your laptop or mobile to link progress. (Case insensitive)\n\nCurrent Sync Code:", syncCode);
  if (code && code.trim() !== '') {
    changeSyncCode(code);
  }
}

function manualSyncTrigger() {
  if (typeof toast === 'function') {
    toast("🔄 Checking cloud for updates...");
  }
  syncPull(true);
}

function forceBackupToCloud() {
  if (confirm("📤 This will overwrite the cloud backup with this device's progress. Are you sure you want to upload your current data to the cloud?")) {
    if (!db || !syncCode) {
      alert("⚠️ Sync offline: Firebase not initialized.");
      return;
    }
    const saved = localStorage.getItem('placementOS_v2');
    if (!saved) {
      alert("❌ No local data to backup.");
      return;
    }
    try {
      const stateObj = JSON.parse(saved);
      stateObj.updatedAt = Date.now();
      try {
        localStorage.setItem('placementOS_v2', JSON.stringify(stateObj));
        localStorage.setItem('placementOS_v2_backup', JSON.stringify(stateObj));
      } catch(e) {}
      
      syncPush(stateObj).then(() => {
        alert("✅ Cloud backup successfully updated with this device's progress! Now you can reload or click 'Restore' on your other devices to sync.");
      }).catch(err => {
        alert("❌ Failed to push backup: " + err.message);
      });
    } catch(e) {
      alert("❌ Error preparing backup data: " + e.message);
    }
  }
}

function forceRestoreFromCloud() {
  if (confirm("⚠️ This will overwrite your local device progress with the cloud backup. Are you sure you want to download your cloud data?")) {
    if (!db || !syncCode) {
      alert("⚠️ Sync offline: Firebase not initialized.");
      return;
    }
    updateSyncStatusUI('syncing', '#f1c40f');
    db.collection('sync_states').doc(syncCode).get().then(doc => {
      if (doc.exists) {
        const serverData = doc.data();
        try {
          const parsedServer = JSON.parse(serverData.data);
          localStorage.setItem('placementOS_v2', serverData.data);
          localStorage.setItem('placementOS_v2_backup', serverData.data);
          if (parsedServer.wallpaper) {
            localStorage.setItem('placementos_wallpaper', parsedServer.wallpaper);
          }
          updateSyncStatusUI('synced', '#2ecc71');
          alert("✅ Data restored from cloud successfully! The page will reload.");
          location.reload();
        } catch (e) {
          updateSyncStatusUI('error', '#e74c3c');
          alert("❌ Error parsing cloud data: " + e.message);
        }
      } else {
        updateSyncStatusUI('error', '#e74c3c');
        alert("❌ No backup found on cloud for code: " + syncCode);
      }
    }).catch(err => {
      updateSyncStatusUI('error', '#e74c3c');
      alert("❌ Failed to download from cloud: " + err.message);
    });
  }
}

function forceBackupToCloudUrl() {
  if (!db || !syncCode) {
    alert("⚠️ Sync offline: Firebase not initialized.");
    return;
  }
  const saved = localStorage.getItem('placementOS_v2');
  if (!saved) {
    alert("❌ No local data found on this device to backup.");
    return;
  }
  try {
    const stateObj = JSON.parse(saved);
    stateObj.updatedAt = Date.now();
    try {
      localStorage.setItem('placementOS_v2', JSON.stringify(stateObj));
      localStorage.setItem('placementOS_v2_backup', JSON.stringify(stateObj));
    } catch(e) {}
    
    const dsaCount = stateObj.dsa ? stateObj.dsa.length : 0;
    const levelVal = stateObj.level || 1;
    
    if (confirm("📤 Click OK to upload your phone's real progress (DSA Solved: " + dsaCount + ", Level: " + levelVal + ") to the cloud. This will overwrite the backup on the server.")) {
      updateSyncStatusUI('saving', '#f1c40f');
      syncPush(stateObj).then(() => {
        updateSyncStatusUI('synced', '#2ecc71');
        alert("✅ Success! Your phone's real data (DSA Solved: " + dsaCount + ") has been uploaded to the cloud backup! Now, you can open your laptop and click the red 'Restore' button to sync it.");
        window.history.replaceState({}, document.title, window.location.pathname);
      }).catch(err => {
        updateSyncStatusUI('error', '#e74c3c');
        alert("❌ Backup failed: " + err.message);
      });
    }
  } catch(e) {
    alert("❌ Error parsing local database: " + e.message);
  }
}

// Expose functions globally
window.syncPush = syncPush;
window.syncPull = syncPull;
window.promptSyncCode = promptSyncCode;
window.manualSyncTrigger = manualSyncTrigger;
window.forceBackupToCloud = forceBackupToCloud;
window.forceRestoreFromCloud = forceRestoreFromCloud;
