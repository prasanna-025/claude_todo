@echo off
echo ====================================================
echo        PlacementOS - Deploy to Firebase & Vercel
echo ====================================================
echo.
echo [1/3] Logging into Firebase...
call npx -y firebase-tools login
echo.
echo [2/3] Deploying to Firebase Hosting (placementos-prasanna)...
call npx -y firebase-tools deploy --only hosting
echo.
echo [3/3] Deploying to Vercel (Production)...
call npx -y vercel --prod
echo.
echo ====================================================
echo   SUCCESS! Deployment complete.
echo ====================================================
pause
