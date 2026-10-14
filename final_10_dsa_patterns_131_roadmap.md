# 🎯 Final DSA Pattern Roadmap — 10 Patterns (131 Problems)
> **Locked & Finalized Curriculum for Placement Preparation**  
> Progressive difficulty: foundational data structures and lookups first, then windowing, binary search, stacks, heaps, intervals, trees/graphs, and dynamic programming.

---
## 📊 Summary by Pattern

| # | Pattern | Problems | Primary Concepts |
|---|---|:---:|---|
| 1 | [Hashing / Hash Map](#1-hashing--hash-map) | **15** | `dict`, `set`, `frequency map`, `index map`, `lookup / complement` |
| 2 | [Prefix Sum](#2-prefix-sum) | **10** | `prefix array`, `prefix + HashMap`, `range sums`, `difference array` |
| 3 | [Two Pointers](#3-two-pointers) | **12** | `left/right pointers`, `slow/fast positions`, `sorted-array technique`, `3Sum/4Sum` |
| 4 | [Sliding Window](#4-sliding-window) | **12** | `fixed window`, `variable window`, `frequency map`, `left/right contraction`, `monotonic deque` |
| 5 | [Binary Search](#5-binary-search) | **12** | `normal BS`, `boundary conditions`, `rotated arrays`, `binary search on answer` |
| 6 | [Stack / Monotonic Stack](#6-stack--monotonic-stack) | **12** | `LIFO processing`, `nested parsing`, `monotonic increasing/decreasing stack`, `contribution technique` |
| 7 | [Heap / Top-K](#7-heap--top-k) | **8** | `min heap`, `max heap`, `fixed-size heap (size K)`, `two heaps (median)` |
| 8 | [Intervals + Greedy](#8-intervals--greedy) | **14** | `sorting intervals`, `earliest finish time`, `local optimal choice`, `resource allocation` |
| 9 | [Trees + DFS/BFS + Basic Graph](#9-trees--dfsbfs--basic-graph) | **18** | `recursive DFS`, `BFS queue`, `visited set`, `tree traversal`, `graph traversal`, `cycle detection` |
| 10 | [Backtracking + Basic DP](#10-backtracking--basic-dp) | **18** | `recursion`, `decision tree`, `memoization`, `tabulation`, `1D / 2D DP` |
| | **TOTAL** | **131** | **Mastery Across 10 Core Patterns** |

---

## 🧠 The 8-Step Study Process

```text
1. Learn the pattern — 30–45 min
2. Solve 2 Easy problems first to internalize the core template
3. Move to Medium problems
4. If stuck, struggle for 20–25 minutes BEFORE seeing any solution/hint
5. Understand the solution logic, time complexity, and edge cases
6. Close the solution and code it entirely from scratch in your editor
7. Next day, re-solve the problems you struggled with
8. After finishing the pattern, do 3–5 random problems from that pattern
```

---

## 1️⃣ Hashing / Hash Map — 15 Problems

**Goal:** Frequency, lookup, duplicates, index mapping, and combining hashing with other patterns.

**Learn & Apply:** `dict`, `set`, `frequency map`, `index map`, `lookup / complement`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Two Sum** (LC 1) | `Easy` | [Open LeetCode](https://leetcode.com/problems/two-sum/) |
| 2 | **Contains Duplicate** (LC 217) | `Easy` | [Open LeetCode](https://leetcode.com/problems/contains-duplicate/) |
| 3 | **Valid Anagram** (LC 242) | `Easy` | [Open LeetCode](https://leetcode.com/problems/valid-anagram/) |
| 4 | **Group Anagrams** (LC 49) | `Medium` | [Open LeetCode](https://leetcode.com/problems/group-anagrams/) |
| 5 | **Majority Element** (LC 169) | `Easy` | [Open LeetCode](https://leetcode.com/problems/majority-element/) |
| 6 | **Isomorphic Strings** (LC 205) | `Easy` | [Open LeetCode](https://leetcode.com/problems/isomorphic-strings/) |
| 7 | **Happy Number** (LC 202) | `Easy` | [Open LeetCode](https://leetcode.com/problems/happy-number/) |
| 8 | **Intersection of Two Arrays** (LC 349) | `Easy` | [Open LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/) |
| 9 | **Top K Frequent Elements** (LC 347) | `Medium` | [Open LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) |
| 10 | **Longest Consecutive Sequence** (LC 128) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/) |
| 11 | **Longest Substring Without Repeating Characters** (LC 3) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 12 | **Find All Anagrams in a String** (LC 438) | `Medium` | [Open LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| 13 | **Subarray Sum Equals K** (LC 560) | `Medium` | [Open LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 14 | **4Sum II** (LC 454) | `Medium` | [Open LeetCode](https://leetcode.com/problems/4sum-ii/) |
| 15 | **Minimum Window Substring** (LC 76) | `Hard` | [Open LeetCode](https://leetcode.com/problems/minimum-window-substring/) |

---

## 2️⃣ Prefix Sum — 10 Problems

**Goal:** Turn repeated range/subarray calculations into O(1) lookups and combine prefix sums with Hashing.

**Learn & Apply:** `prefix array`, `prefix + HashMap`, `range sums`, `difference array`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Running Sum of 1d Array** (LC 1480) | `Easy` | [Open LeetCode](https://leetcode.com/problems/running-sum-of-1d-array/) |
| 2 | **Range Sum Query - Immutable** (LC 303) | `Easy` | [Open LeetCode](https://leetcode.com/problems/range-sum-query-immutable/) |
| 3 | **Find Pivot Index** (LC 724) | `Easy` | [Open LeetCode](https://leetcode.com/problems/find-pivot-index/) |
| 4 | **Left and Right Sum Differences** (LC 2574) | `Easy` | [Open LeetCode](https://leetcode.com/problems/left-and-right-sum-differences/) |
| 5 | **Subarray Sum Equals K** (LC 560) | `Medium` | [Open LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/) |
| 6 | **Contiguous Array** (LC 525) | `Medium` | [Open LeetCode](https://leetcode.com/problems/contiguous-array/) |
| 7 | **Product of Array Except Self** (LC 238) | `Medium` | [Open LeetCode](https://leetcode.com/problems/product-of-array-except-self/) |
| 8 | **Corporate Flight Bookings** (LC 1109) | `Medium` | [Open LeetCode](https://leetcode.com/problems/corporate-flight-bookings/) |
| 9 | **Car Pooling** (LC 1094) | `Medium` | [Open LeetCode](https://leetcode.com/problems/car-pooling/) |
| 10 | **Continuous Subarray Sum** (LC 523) | `Medium` | [Open LeetCode](https://leetcode.com/problems/continuous-subarray-sum/) |

---

## 3️⃣ Two Pointers — 12 Problems

**Goal:** Use two indices to reduce O(n²) problems to O(n), especially with sorted arrays.

**Learn & Apply:** `left/right pointers`, `slow/fast positions`, `sorted-array technique`, `3Sum/4Sum`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Valid Palindrome** (LC 125) | `Easy` | [Open LeetCode](https://leetcode.com/problems/valid-palindrome/) |
| 2 | **Two Sum II - Input Array Is Sorted** (LC 167) | `Medium` | [Open LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |
| 3 | **Remove Duplicates from Sorted Array** (LC 26) | `Easy` | [Open LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| 4 | **Move Zeroes** (LC 283) | `Easy` | [Open LeetCode](https://leetcode.com/problems/move-zeroes/) |
| 5 | **Merge Sorted Array** (LC 88) | `Easy` | [Open LeetCode](https://leetcode.com/problems/merge-sorted-array/) |
| 6 | **Squares of a Sorted Array** (LC 977) | `Easy` | [Open LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/) |
| 7 | **3Sum** (LC 15) | `Medium` | [Open LeetCode](https://leetcode.com/problems/3sum/) |
| 8 | **Container With Most Water** (LC 11) | `Medium` | [Open LeetCode](https://leetcode.com/problems/container-with-most-water/) |
| 9 | **Sort Colors** (LC 75) | `Medium` | [Open LeetCode](https://leetcode.com/problems/sort-colors/) |
| 10 | **Boats to Save People** (LC 881) | `Medium` | [Open LeetCode](https://leetcode.com/problems/boats-to-save-people/) |
| 11 | **4Sum** (LC 18) | `Medium` | [Open LeetCode](https://leetcode.com/problems/4sum/) |
| 12 | **Trapping Rain Water** (LC 42) | `Hard` | [Open LeetCode](https://leetcode.com/problems/trapping-rain-water/) |

---

## 4️⃣ Sliding Window — 12 Problems

**Goal:** Efficiently process contiguous subarrays/substrings without recomputing overlapping elements.

**Learn & Apply:** `fixed window`, `variable window`, `frequency map`, `left/right contraction`, `monotonic deque`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Maximum Average Subarray I** (LC 643) | `Easy` | [Open LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/) |
| 2 | **Maximum Number of Vowels in a Substring of Given Length** (LC 1456) | `Medium` | [Open LeetCode](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) |
| 3 | **Longest Substring Without Repeating Characters** (LC 3) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |
| 4 | **Permutation in String** (LC 567) | `Medium` | [Open LeetCode](https://leetcode.com/problems/permutation-in-string/) |
| 5 | **Find All Anagrams in a String** (LC 438) | `Medium` | [Open LeetCode](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |
| 6 | **Longest Repeating Character Replacement** (LC 424) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/) |
| 7 | **Max Consecutive Ones III** (LC 1004) | `Medium` | [Open LeetCode](https://leetcode.com/problems/max-consecutive-ones-iii/) |
| 8 | **Minimum Size Subarray Sum** (LC 209) | `Medium` | [Open LeetCode](https://leetcode.com/problems/minimum-size-subarray-sum/) |
| 9 | **Fruit Into Baskets** (LC 904) | `Medium` | [Open LeetCode](https://leetcode.com/problems/fruit-into-baskets/) |
| 10 | **Minimum Window Substring** (LC 76) | `Hard` | [Open LeetCode](https://leetcode.com/problems/minimum-window-substring/) |
| 11 | **Subarray Product Less Than K** (LC 713) | `Medium` | [Open LeetCode](https://leetcode.com/problems/subarray-product-less-than-k/) |
| 12 | **Sliding Window Maximum** (LC 239) | `Hard` | [Open LeetCode](https://leetcode.com/problems/sliding-window-maximum/) |

---

## 5️⃣ Binary Search — 12 Problems

**Goal:** Search a sorted/monotonic search space in O(log n), including binary search on the answer range.

**Learn & Apply:** `normal BS`, `boundary conditions`, `rotated arrays`, `binary search on answer`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Binary Search** (LC 704) | `Easy` | [Open LeetCode](https://leetcode.com/problems/binary-search/) |
| 2 | **Search Insert Position** (LC 35) | `Easy` | [Open LeetCode](https://leetcode.com/problems/search-insert-position/) |
| 3 | **First Bad Version** (LC 278) | `Easy` | [Open LeetCode](https://leetcode.com/problems/first-bad-version/) |
| 4 | **Sqrt(x)** (LC 69) | `Easy` | [Open LeetCode](https://leetcode.com/problems/sqrtx/) |
| 5 | **Find First and Last Position of Element in Sorted Array** (LC 34) | `Medium` | [Open LeetCode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |
| 6 | **Search in Rotated Sorted Array** (LC 33) | `Medium` | [Open LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/) |
| 7 | **Find Minimum in Rotated Sorted Array** (LC 153) | `Medium` | [Open LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) |
| 8 | **Search a 2D Matrix** (LC 74) | `Medium` | [Open LeetCode](https://leetcode.com/problems/search-a-2d-matrix/) |
| 9 | **Find Peak Element** (LC 162) | `Medium` | [Open LeetCode](https://leetcode.com/problems/find-peak-element/) |
| 10 | **Koko Eating Bananas** (LC 875) | `Medium` | [Open LeetCode](https://leetcode.com/problems/koko-eating-bananas/) |
| 11 | **Capacity To Ship Packages Within D Days** (LC 1011) | `Medium` | [Open LeetCode](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) |
| 12 | **Time Based Key-Value Store** (LC 981) | `Medium` | [Open LeetCode](https://leetcode.com/problems/time-based-key-value-store/) |

---

## 6️⃣ Stack / Monotonic Stack — 12 Problems

**Goal:** LIFO operations, parenthesis balancing, and 'next greater/smaller element' using monotonic stacks.

**Learn & Apply:** `LIFO processing`, `nested parsing`, `monotonic increasing/decreasing stack`, `contribution technique`

### Normal Stack (6)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Valid Parentheses** (LC 20) | `Easy` | [Open LeetCode](https://leetcode.com/problems/valid-parentheses/) |
| 2 | **Min Stack** (LC 155) | `Medium` | [Open LeetCode](https://leetcode.com/problems/min-stack/) |
| 3 | **Evaluate Reverse Polish Notation** (LC 150) | `Medium` | [Open LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/) |
| 4 | **Backspace String Compare** (LC 844) | `Easy` | [Open LeetCode](https://leetcode.com/problems/backspace-string-compare/) |
| 5 | **Simplify Path** (LC 71) | `Medium` | [Open LeetCode](https://leetcode.com/problems/simplify-path/) |
| 6 | **Decode String** (LC 394) | `Medium` | [Open LeetCode](https://leetcode.com/problems/decode-string/) |

### Monotonic Stack (6)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Daily Temperatures** (LC 739) | `Medium` | [Open LeetCode](https://leetcode.com/problems/daily-temperatures/) |
| 2 | **Next Greater Element I** (LC 496) | `Easy` | [Open LeetCode](https://leetcode.com/problems/next-greater-element-i/) |
| 3 | **Next Greater Element II** (LC 503) | `Medium` | [Open LeetCode](https://leetcode.com/problems/next-greater-element-ii/) |
| 4 | **Online Stock Span** (LC 901) | `Medium` | [Open LeetCode](https://leetcode.com/problems/online-stock-span/) |
| 5 | **Largest Rectangle in Histogram** (LC 84) | `Hard` | [Open LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/) |
| 6 | **Sum of Subarray Minimums** (LC 907) | `Medium` | [Open LeetCode](https://leetcode.com/problems/sum-of-subarray-minimums/) |

---

## 7️⃣ Heap / Top-K — 8 Problems

**Goal:** Priority queues, K largest/smallest elements, and continuous streaming data calculations.

**Learn & Apply:** `min heap`, `max heap`, `fixed-size heap (size K)`, `two heaps (median)`

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Kth Largest Element in an Array** (LC 215) | `Medium` | [Open LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/) |
| 2 | **Top K Frequent Elements** (LC 347) | `Medium` | [Open LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) |
| 3 | **K Closest Points to Origin** (LC 973) | `Medium` | [Open LeetCode](https://leetcode.com/problems/k-closest-points-to-origin/) |
| 4 | **Last Stone Weight** (LC 1046) | `Easy` | [Open LeetCode](https://leetcode.com/problems/last-stone-weight/) |
| 5 | **Find Median from Data Stream** (LC 295) | `Hard` | [Open LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) |
| 6 | **Task Scheduler** (LC 621) | `Medium` | [Open LeetCode](https://leetcode.com/problems/task-scheduler/) |
| 7 | **Reorganize String** (LC 767) | `Medium` | [Open LeetCode](https://leetcode.com/problems/reorganize-string/) |
| 8 | **Kth Smallest Element in a Sorted Matrix** (LC 378) | `Medium` | [Open LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |

---

## 8️⃣ Intervals + Greedy — 14 Problems

**Goal:** Overlap resolution, interval merging/scheduling, earliest finish time, and local optimal choices.

**Learn & Apply:** `sorting intervals`, `earliest finish time`, `local optimal choice`, `resource allocation`

### Intervals (7)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Merge Intervals** (LC 56) | `Medium` | [Open LeetCode](https://leetcode.com/problems/merge-intervals/) |
| 2 | **Insert Interval** (LC 57) | `Medium` | [Open LeetCode](https://leetcode.com/problems/insert-interval/) |
| 3 | **Non-overlapping Intervals** (LC 435) | `Medium` | [Open LeetCode](https://leetcode.com/problems/non-overlapping-intervals/) |
| 4 | **Meeting Rooms** (LC 252) | `Easy` | [Open LeetCode](https://leetcode.com/problems/meeting-rooms/) |
| 5 | **Meeting Rooms II** (LC 253) | `Medium` | [Open LeetCode](https://leetcode.com/problems/meeting-rooms-ii/) |
| 6 | **Minimum Number of Arrows to Burst Balloons** (LC 452) | `Medium` | [Open LeetCode](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |
| 7 | **Interval List Intersections** (LC 986) | `Medium` | [Open LeetCode](https://leetcode.com/problems/interval-list-intersections/) |

### Greedy (7)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Best Time to Buy and Sell Stock II** (LC 122) | `Medium` | [Open LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |
| 2 | **Jump Game** (LC 55) | `Medium` | [Open LeetCode](https://leetcode.com/problems/jump-game/) |
| 3 | **Jump Game II** (LC 45) | `Medium` | [Open LeetCode](https://leetcode.com/problems/jump-game-ii/) |
| 4 | **Gas Station** (LC 134) | `Medium` | [Open LeetCode](https://leetcode.com/problems/gas-station/) |
| 5 | **Partition Labels** (LC 763) | `Medium` | [Open LeetCode](https://leetcode.com/problems/partition-labels/) |
| 6 | **Assign Cookies** (LC 455) | `Easy` | [Open LeetCode](https://leetcode.com/problems/assign-cookies/) |
| 7 | **Lemonade Change** (LC 860) | `Easy` | [Open LeetCode](https://leetcode.com/problems/lemonade-change/) |

---

## 9️⃣ Trees + DFS/BFS + Basic Graph — 18 Problems

**Goal:** Tree structures, recursive DFS, level-order BFS queues, grid matrix traversals, and cycle detection.

**Learn & Apply:** `recursive DFS`, `BFS queue`, `visited set`, `tree traversal`, `graph traversal`, `cycle detection`

### Tree / DFS (9)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Maximum Depth of Binary Tree** (LC 104) | `Easy` | [Open LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| 2 | **Invert Binary Tree** (LC 226) | `Easy` | [Open LeetCode](https://leetcode.com/problems/invert-binary-tree/) |
| 3 | **Same Tree** (LC 100) | `Easy` | [Open LeetCode](https://leetcode.com/problems/same-tree/) |
| 4 | **Path Sum** (LC 112) | `Easy` | [Open LeetCode](https://leetcode.com/problems/path-sum/) |
| 5 | **Diameter of Binary Tree** (LC 543) | `Easy` | [Open LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/) |
| 6 | **Balanced Binary Tree** (LC 110) | `Easy` | [Open LeetCode](https://leetcode.com/problems/balanced-binary-tree/) |
| 7 | **Lowest Common Ancestor of a Binary Search Tree** (LC 235) | `Medium` | [Open LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| 8 | **Binary Tree Maximum Path Sum** (LC 124) | `Hard` | [Open LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |
| 9 | **Path Sum II** (LC 113) | `Medium` | [Open LeetCode](https://leetcode.com/problems/path-sum-ii/) |

### Tree BFS (5)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Binary Tree Level Order Traversal** (LC 102) | `Medium` | [Open LeetCode](https://leetcode.com/problems/binary-tree-level-order-traversal/) |
| 2 | **Binary Tree Right Side View** (LC 199) | `Medium` | [Open LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/) |
| 3 | **Average of Levels in Binary Tree** (LC 637) | `Easy` | [Open LeetCode](https://leetcode.com/problems/average-of-levels-in-binary-tree/) |
| 4 | **Minimum Depth of Binary Tree** (LC 111) | `Easy` | [Open LeetCode](https://leetcode.com/problems/minimum-depth-of-binary-tree/) |
| 5 | **Binary Tree Zigzag Level Order Traversal** (LC 103) | `Medium` | [Open LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) |

### Graph / Grid (4)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Number of Islands** (LC 200) | `Medium` | [Open LeetCode](https://leetcode.com/problems/number-of-islands/) |
| 2 | **Clone Graph** (LC 133) | `Medium` | [Open LeetCode](https://leetcode.com/problems/clone-graph/) |
| 3 | **Course Schedule** (LC 207) | `Medium` | [Open LeetCode](https://leetcode.com/problems/course-schedule/) |
| 4 | **Rotting Oranges** (LC 994) | `Medium` | [Open LeetCode](https://leetcode.com/problems/rotting-oranges/) |

---

## 🔟 Backtracking + Basic DP — 18 Problems

**Goal:** Exhaustive combinatorial search, pruning decision trees, recursion to memoization, and optimal substructure.

**Learn & Apply:** `recursion`, `decision tree`, `memoization`, `tabulation`, `1D / 2D DP`

### Backtracking (8)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Subsets** (LC 78) | `Medium` | [Open LeetCode](https://leetcode.com/problems/subsets/) |
| 2 | **Subsets II** (LC 90) | `Medium` | [Open LeetCode](https://leetcode.com/problems/subsets-ii/) |
| 3 | **Permutations** (LC 46) | `Medium` | [Open LeetCode](https://leetcode.com/problems/permutations/) |
| 4 | **Combination Sum** (LC 39) | `Medium` | [Open LeetCode](https://leetcode.com/problems/combination-sum/) |
| 5 | **Combination Sum II** (LC 40) | `Medium` | [Open LeetCode](https://leetcode.com/problems/combination-sum-ii/) |
| 6 | **Letter Combinations of a Phone Number** (LC 17) | `Medium` | [Open LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |
| 7 | **Generate Parentheses** (LC 22) | `Medium` | [Open LeetCode](https://leetcode.com/problems/generate-parentheses/) |
| 8 | **Word Search** (LC 79) | `Medium` | [Open LeetCode](https://leetcode.com/problems/word-search/) |

### Dynamic Programming (10)

| # | Problem | Difficulty | LeetCode Link |
|---|---|:---:|---|
| 1 | **Climbing Stairs** (LC 70) | `Easy` | [Open LeetCode](https://leetcode.com/problems/climbing-stairs/) |
| 2 | **Min Cost Climbing Stairs** (LC 746) | `Easy` | [Open LeetCode](https://leetcode.com/problems/min-cost-climbing-stairs/) |
| 3 | **House Robber** (LC 198) | `Medium` | [Open LeetCode](https://leetcode.com/problems/house-robber/) |
| 4 | **House Robber II** (LC 213) | `Medium` | [Open LeetCode](https://leetcode.com/problems/house-robber-ii/) |
| 5 | **Coin Change** (LC 322) | `Medium` | [Open LeetCode](https://leetcode.com/problems/coin-change/) |
| 6 | **Maximum Subarray** (LC 53) | `Medium` | [Open LeetCode](https://leetcode.com/problems/maximum-subarray/) |
| 7 | **Unique Paths** (LC 62) | `Medium` | [Open LeetCode](https://leetcode.com/problems/unique-paths/) |
| 8 | **Longest Increasing Subsequence** (LC 300) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-increasing-subsequence/) |
| 9 | **Partition Equal Subset Sum** (LC 416) | `Medium` | [Open LeetCode](https://leetcode.com/problems/partition-equal-subset-sum/) |
| 10 | **Longest Common Subsequence** (LC 1143) | `Medium` | [Open LeetCode](https://leetcode.com/problems/longest-common-subsequence/) |

---

