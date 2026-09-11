# 🚀 ACCENTURE 15-DAY MASTER PLAN: DAILY DSA & SQL LEETCODE CHEAT SHEET

Every single day's **DSA problems** and **SQL challenges** mapped directly to **LeetCode problem links**, along with key pattern formulas and solutions.

---

# 🟦 DAY 1: DSA (Arrays & Strings Foundation) + SQL (Basic SELECT & Filtering)

### 💻 DSA: Arrays, Strings, Hashing, Frequency & Two Pointers (8 Problems)
1. **[LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Hash Map (store `target - num -> index`). $O(N)$ Time, $O(N)$ Space.
2. **[LeetCode 217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Hash Set (check `if num in seen: return True`). $O(N)$ Time.
3. **[LeetCode 242 — Valid Anagram](https://leetcode.com/problems/valid-anagram/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Frequency Counter / Hash Map. Count characters in `s` and `t`.
4. **[LeetCode 268 — Missing Number](https://leetcode.com/problems/missing-number/)** ⭐⭐⭐⭐
   * *Pattern*: Math sum `n * (n + 1) // 2 - sum(nums)` or XOR `^`.
5. **[LeetCode 344 — Reverse String](https://leetcode.com/problems/reverse-string/)** ⭐⭐⭐⭐
   * *Pattern*: Two Pointers (`left = 0, right = len(s) - 1`, swap until `left >= right`).
6. **[LeetCode 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Two Pointers + `isalnum()`, compare lowercase chars.
7. **[LeetCode 1480 — Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)** ⭐⭐⭐⭐
   * *Pattern*: Prefix Sum (`nums[i] += nums[i - 1]`).
8. **[LeetCode 387 — First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)** ⭐⭐⭐⭐
   * *Pattern*: Frequency map + second pass linear scan.

### 👨‍💻 SQL: SELECT, WHERE, ORDER BY, IN, LIKE, DISTINCT (5 LeetCode Queries)
1. **[LeetCode 1757 — Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)**
   ```sql
   SELECT product_id FROM Products WHERE low_fats = 'Y' AND recyclable = 'Y';
   ```
2. **[LeetCode 584 — Find Customer Referee](https://leetcode.com/problems/find-customer-referee/)**
   ```sql
   SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL;
   ```
3. **[LeetCode 595 — Big Countries](https://leetcode.com/problems/big-countries/)**
   ```sql
   SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;
   ```
4. **[LeetCode 1148 — Article Views I](https://leetcode.com/problems/article-views-i/)**
   ```sql
   SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY id ASC;
   ```
5. **[LeetCode 1683 — Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)**
   ```sql
   SELECT tweet_id FROM Tweets WHERE LENGTH(content) > 15;
   ```

---

# 🟦 DAY 2: DSA (Sliding Window & Two Pointers) + SQL (Aggregates & GROUP BY)

### 💻 DSA: Sliding Window, Two Pointers, Array Manipulation (8 Problems)
1. **[LeetCode 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)** ⭐⭐⭐⭐⭐
   * *Pattern*: One-pass tracking `min_price` and `max_profit = max(max_profit, price - min_price)`.
2. **[LeetCode 167 — Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Two Pointers on sorted array (`left++` if sum < target, `right--` if sum > target).
3. **[LeetCode 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Two Pointers at ends, move the pointer with the smaller height inwards.
4. **[LeetCode 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)** ⭐⭐⭐⭐
   * *Pattern*: Two Pointers (`insert_pos` and current iterator).
5. **[LeetCode 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)** ⭐⭐⭐⭐
   * *Pattern*: In-place slow/fast pointers.
6. **[LeetCode 189 — Rotate Array](https://leetcode.com/problems/rotate-array/)** ⭐⭐⭐⭐
   * *Pattern*: Reverse entire array, reverse first `k`, reverse remaining `n-k`.
7. **[LeetCode 3 — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Sliding Window + Hash Map of last seen index.
8. **[LeetCode 169 — Majority Element](https://leetcode.com/problems/majority-element/)** ⭐⭐⭐⭐
   * *Pattern*: Boyer-Moore Voting Algorithm (`count += 1 if num == candidate else -1`).

### 👨‍💻 SQL: COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING (5 LeetCode Queries)
1. **[LeetCode 620 — Not Boring Movies](https://leetcode.com/problems/not-boring-movies/)**
   ```sql
   SELECT * FROM Cinema WHERE id % 2 = 1 AND description != 'boring' ORDER BY rating DESC;
   ```
2. **[LeetCode 1251 — Average Selling Price](https://leetcode.com/problems/average-selling-price/)**
   ```sql
   SELECT p.product_id, IFNULL(ROUND(SUM(p.price * u.units) / SUM(u.units), 2), 0) AS average_price
   FROM Prices p LEFT JOIN UnitsSold u 
   ON p.product_id = u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date
   GROUP BY p.product_id;
   ```
3. **[LeetCode 1075 — Project Employees I](https://leetcode.com/problems/project-employees-i/)**
   ```sql
   SELECT p.project_id, ROUND(AVG(e.experience_years), 2) AS average_years
   FROM Project p JOIN Employee e ON p.employee_id = e.employee_id
   GROUP BY p.project_id;
   ```
4. **[LeetCode 1633 — Percentage of Users Attended a Contest](https://leetcode.com/problems/percentage-of-users-attended-a-contest/)**
   ```sql
   SELECT contest_id, ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage
   FROM Register GROUP BY contest_id ORDER BY percentage DESC, contest_id ASC;
   ```
5. **[LeetCode 1193 — Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/)**
   ```sql
   SELECT DATE_FORMAT(trans_date, '%Y-%m') AS month, country,
          COUNT(*) AS trans_count,
          SUM(state = 'approved') AS approved_count,
          SUM(amount) AS trans_total_amount,
          SUM(IF(state = 'approved', amount, 0)) AS approved_total_amount
   FROM Transactions GROUP BY month, country;
   ```

---

# 🟦 DAY 3: DSA (Searching & Sorting) + SQL (JOIN Operations)

### 💻 DSA: Searching, Binary Search & Sorting (8 Problems)
1. **[LeetCode 704 — Binary Search](https://leetcode.com/problems/binary-search/)** ⭐⭐⭐⭐⭐
   * *Pattern*: `mid = (low + high) // 2`, narrow search interval in $O(\log N)$.
2. **[LeetCode 35 — Search Insert Position](https://leetcode.com/problems/search-insert-position/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Lower bound binary search return `low`.
3. **[LeetCode 69 — Sqrt(x)](https://leetcode.com/problems/sqrtx/)** ⭐⭐⭐⭐
   * *Pattern*: Binary search on answer range `[0, x]`.
4. **[LeetCode 88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Three pointers backwards from `m + n - 1`.
5. **[LeetCode 75 — Sort Colors](https://leetcode.com/problems/sort-colors/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Dutch National Flag 3-pointer algorithm (`low`, `mid`, `high`).
6. **[LeetCode 34 — Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)** ⭐⭐⭐⭐
   * *Pattern*: Binary search twice (first occurrence + last occurrence).
7. **[LeetCode 33 — Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Binary search checking which half is strictly sorted.
8. **[LeetCode 153 — Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)** ⭐⭐⭐⭐
   * *Pattern*: Binary search comparing `nums[mid]` against `nums[high]`.

### 👨‍💻 SQL: INNER, LEFT, RIGHT & SELF JOINs (5 LeetCode Queries)
1. **[LeetCode 1378 — Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)**
   ```sql
   SELECT eu.unique_id, e.name FROM Employees e LEFT JOIN EmployeeUNI eu ON e.id = eu.id;
   ```
2. **[LeetCode 1068 — Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/)**
   ```sql
   SELECT p.product_name, s.year, s.price FROM Sales s JOIN Product p ON s.product_id = p.product_id;
   ```
3. **[LeetCode 1581 — Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)**
   ```sql
   SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans
   FROM Visits v LEFT JOIN Transactions t ON v.visit_id = t.visit_id
   WHERE t.transaction_id IS NULL GROUP BY v.customer_id;
   ```
4. **[LeetCode 197 — Rising Temperature](https://leetcode.com/problems/rising-temperature/)**
   ```sql
   SELECT w1.id FROM Weather w1 JOIN Weather w2
   ON DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;
   ```
5. **[LeetCode 570 — Managers with at Least 5 Direct Reports](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/)**
   ```sql
   SELECT m.name FROM Employee e JOIN Employee m ON e.managerId = m.id
   GROUP BY e.managerId HAVING COUNT(e.id) >= 5;
   ```

---

# 🟦 DAY 4: DSA (Matrix & Stack) + SQL (Subqueries & CASE)

### 💻 DSA: Matrix Traversals & Stack Operations (8 Problems)
1. **[LeetCode 54 — Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)** ⭐⭐⭐⭐⭐
   * *Pattern*: 4 boundary pointers (`top`, `bottom`, `left`, `right`) shrinking inwards.
2. **[LeetCode 48 — Rotate Image](https://leetcode.com/problems/rotate-image/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Transpose matrix (`matrix[i][j], matrix[j][i]`), then reverse each row.
3. **[LeetCode 73 — Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)** ⭐⭐⭐⭐
   * *Pattern*: Use first row and first column as markers, $O(1)$ space.
4. **[LeetCode 20 — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Stack + matching brackets hash map.
5. **[LeetCode 155 — Min Stack](https://leetcode.com/problems/min-stack/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Two stacks (value stack + minimum stack) or tuple `(val, current_min)`.
6. **[LeetCode 1047 — Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)** ⭐⭐⭐⭐
   * *Pattern*: Stack peek comparison (`if stack and stack[-1] == ch: stack.pop()`).
7. **[LeetCode 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)** ⭐⭐⭐⭐
   * *Pattern*: Stack for operands, pop top 2 on operator.
8. **[LeetCode 739 — Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)** ⭐⭐⭐⭐⭐
   * *Pattern*: Monotonic decreasing stack storing indices.

### 👨‍💻 SQL: Subqueries, CASE, NULLs & Ranking (5 LeetCode Queries)
1. **[LeetCode 176 — Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)**
   ```sql
   SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);
   ```
2. **[LeetCode 184 — Department Highest Salary](https://leetcode.com/problems/department-highest-salary/)**
   ```sql
   SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
   FROM Employee e JOIN Department d ON e.departmentId = d.id
   WHERE (e.departmentId, e.salary) IN (
       SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentId
   );
   ```
3. **[LeetCode 626 — Exchange Seats](https://leetcode.com/problems/exchange-seats/)**
   ```sql
   SELECT CASE 
            WHEN id % 2 = 1 AND id + 1 <= (SELECT COUNT(*) FROM Seat) THEN id + 1
            WHEN id % 2 = 0 THEN id - 1
            ELSE id 
          END AS id, student
   FROM Seat ORDER BY id;
   ```
4. **[LeetCode 1907 — Count Salary Categories](https://leetcode.com/problems/count-salary-categories/)**
   ```sql
   SELECT 'Low Salary' AS category, COUNT(*) AS accounts_count FROM Accounts WHERE income < 20000
   UNION
   SELECT 'Average Salary', COUNT(*) FROM Accounts WHERE income BETWEEN 20000 AND 50000
   UNION
   SELECT 'High Salary', COUNT(*) FROM Accounts WHERE income > 50000;
   ```
5. **[LeetCode 180 — Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/)**
   ```sql
   SELECT DISTINCT l1.num AS ConsecutiveNums
   FROM Logs l1 JOIN Logs l2 ON l1.id = l2.id - 1 AND l1.num = l2.num
   JOIN Logs l3 ON l1.id = l3.id - 2 AND l1.num = l3.num;
   ```

---

# 🟦 DAY 5: DSA (Timed Mixed Practice) + SQL (60-Min Timed Test)

### 💻 DSA: 10 High-Frequency Accenture Problems
1. **[LeetCode 15 — 3Sum](https://leetcode.com/problems/3sum/)** ⭐⭐⭐⭐⭐
2. **[LeetCode 49 — Group Anagrams](https://leetcode.com/problems/group-anagrams/)** ⭐⭐⭐⭐⭐
3. **[LeetCode 560 — Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)** ⭐⭐⭐⭐⭐
4. **[LeetCode 424 — Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)** ⭐⭐⭐⭐
5. **[LeetCode 53 — Maximum Subarray (Kadane's Algorithm)](https://leetcode.com/problems/maximum-subarray/)** ⭐⭐⭐⭐⭐
6. **[LeetCode 238 — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)** ⭐⭐⭐⭐⭐
7. **[LeetCode 56 — Merge Intervals](https://leetcode.com/problems/merge-intervals/)** ⭐⭐⭐⭐⭐
8. **[LeetCode 128 — Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)** ⭐⭐⭐⭐⭐
9. **[LeetCode 347 — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)** ⭐⭐⭐⭐⭐
10. **[LeetCode 151 — Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)** ⭐⭐⭐⭐

### 👨‍💻 SQL: 60-Min Mock Assessment Queries
1. **[LeetCode 1164 — Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/)**
2. **[LeetCode 1204 — Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/)**
3. **[LeetCode 1341 — Movie Rating](https://leetcode.com/problems/movie-rating/)**
4. **[LeetCode 1321 — Restaurant Growth](https://leetcode.com/problems/restaurant-growth/)**
5. **[LeetCode 585 — Investments in 2016](https://leetcode.com/problems/investments-in-2016/)**

---

# 🟦 DAY 6: DSA (Linked Lists & Stacks) + Frontend HTML/CSS
1. **[LeetCode 206 — Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)** ⭐⭐⭐⭐⭐
2. **[LeetCode 21 — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)** ⭐⭐⭐⭐⭐
3. **[LeetCode 141 — Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)** ⭐⭐⭐⭐⭐
4. **[LeetCode 19 — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)** ⭐⭐⭐⭐⭐
5. **[LeetCode 160 — Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)** ⭐⭐⭐⭐
6. **[LeetCode 234 — Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)** ⭐⭐⭐⭐
7. **[LeetCode 14 — Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)** ⭐⭐⭐⭐
8. **[LeetCode 443 — String Compression](https://leetcode.com/problems/string-compression/)** ⭐⭐⭐⭐

---

# 🟦 DAY 7: DSA (Matrix & Math/Bitwise) + Frontend CSS
1. **[LeetCode 74 — Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)** ⭐⭐⭐⭐⭐
2. **[LeetCode 240 — Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)** ⭐⭐⭐⭐
3. **[LeetCode 59 — Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)** ⭐⭐⭐⭐
4. **[LeetCode 412 — Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)** ⭐⭐⭐⭐
5. **[LeetCode 9 — Palindrome Number](https://leetcode.com/problems/palindrome-number/)** ⭐⭐⭐⭐⭐
6. **[LeetCode 7 — Reverse Integer](https://leetcode.com/problems/reverse-integer/)** ⭐⭐⭐⭐
7. **[LeetCode 50 — Pow(x, n)](https://leetcode.com/problems/powx-n/)** ⭐⭐⭐⭐
8. **[LeetCode 136 — Single Number](https://leetcode.com/problems/single-number/)** ⭐⭐⭐⭐⭐
9. **[LeetCode 191 — Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)** ⭐⭐⭐⭐
10. **[LeetCode 338 — Counting Bits](https://leetcode.com/problems/counting-bits/)** ⭐⭐⭐⭐

---

# 🟦 DAY 8: DSA (Two Pointers & Substrings) + Frontend JavaScript DOM
1. **[LeetCode 977 — Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)** ⭐⭐⭐⭐⭐
2. **[LeetCode 438 — Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)** ⭐⭐⭐⭐
3. **[LeetCode 567 — Permutation in String](https://leetcode.com/problems/permutation-in-string/)** ⭐⭐⭐⭐
4. **[LeetCode 647 — Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)** ⭐⭐⭐⭐
5. **[LeetCode 5 — Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)** ⭐⭐⭐⭐⭐
6. **[LeetCode 724 — Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)** ⭐⭐⭐⭐
7. **[LeetCode 525 — Contiguous Array](https://leetcode.com/problems/contiguous-array/)** ⭐⭐⭐⭐
8. **[LeetCode 179 — Largest Number](https://leetcode.com/problems/largest-number/)** ⭐⭐⭐⭐

---

# 🟦 DAY 9: DSA (Binary Search Range & Advanced Sorting) + Frontend JS ES6
1. **[LeetCode 162 — Find Peak Element](https://leetcode.com/problems/find-peak-element/)** ⭐⭐⭐⭐⭐
2. **[LeetCode 852 — Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)** ⭐⭐⭐⭐
3. **[LeetCode 875 — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)** ⭐⭐⭐⭐⭐
4. **[LeetCode 912 — Sort an Array](https://leetcode.com/problems/sort-an-array/)** ⭐⭐⭐⭐
5. **[LeetCode 148 — Sort List](https://leetcode.com/problems/sort-list/)** ⭐⭐⭐⭐
6. **[LeetCode 84 — Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)** ⭐⭐⭐
7. **[LeetCode 682 — Baseball Game](https://leetcode.com/problems/baseball-game/)** ⭐⭐⭐⭐
8. **[LeetCode 150 — Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)** ⭐⭐⭐⭐

---

# 🟦 DAY 10: DSA (Timed Assessment Simulation) + Frontend React.js
1. **[LeetCode 1 — Two Sum](https://leetcode.com/problems/two-sum/)**
2. **[LeetCode 121 — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)**
3. **[LeetCode 217 — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)**
4. **[LeetCode 20 — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)**
5. **[LeetCode 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)**
6. **[LeetCode 238 — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)**
7. **[LeetCode 704 — Binary Search](https://leetcode.com/problems/binary-search/)**
8. **[LeetCode 11 — Container With Most Water](https://leetcode.com/problems/container-with-most-water/)**
9. **[LeetCode 15 — 3Sum](https://leetcode.com/problems/3sum/)**
10. **[LeetCode 206 — Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)**

---

# 🟦 DAY 11: DSA (Weak Area & Corner Case Practice) + React Forms
1. **[LeetCode 41 — First Missing Positive](https://leetcode.com/problems/first-missing-positive/)** ⭐⭐⭐⭐
2. **[LeetCode 42 — Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)** ⭐⭐⭐⭐⭐
3. **[LeetCode 76 — Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)** ⭐⭐⭐⭐
4. **[LeetCode 287 — Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)** ⭐⭐⭐⭐⭐
5. **[LeetCode 142 — Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)** ⭐⭐⭐⭐
6. **[LeetCode 137 — Single Number II](https://leetcode.com/problems/single-number-ii/)** ⭐⭐⭐⭐
7. **[LeetCode 204 — Count Primes](https://leetcode.com/problems/count-primes/)** ⭐⭐⭐⭐
8. **[LeetCode 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)** ⭐⭐⭐⭐

---

# 🟨 DAY 12: Complete 12-Problem Rotation + Full SQL Mock
* Re-solve Top 12 problems: LC 1, 15, 20, 53, 75, 121, 125, 206, 217, 238, 242, 704.
* Practice 10 complex LeetCode SQL queries (JOINs + Subqueries + Aggregates).

---

# 🔴 DAY 13: Full 45-Min Technical Mock Simulation + Weak Area Drill
* 45-min Timed Technical Assessment simulation.
* Re-solve 8 weak questions from days 1–12.

---

# 🔴 DAY 14: Full 60-Min Coding Simulation (3 Questions)
* **Q1 (Python/DSA)**: 1 medium LeetCode problem (Arrays/Strings/Hashing).
* **Q2 (Database)**: 1 medium SQL Query (JOIN + Aggregate/Subquery).
* **Q3 (Frontend)**: 1 React component / JS DOM challenge.

---

# 🔥 DAY 15: Final Assessment Simulation & Mistake Notebook Review
* Replicate exact assessment sequence: 45 min Technical MCQ -> 60 min Coding -> 30 min Communication.
* Final review of top 5 DSA patterns (Arrays ⭐⭐⭐⭐⭐, Strings ⭐⭐⭐⭐⭐, Hashing ⭐⭐⭐⭐⭐, Two Pointers ⭐⭐⭐⭐, Sliding Window ⭐⭐⭐⭐).
* **Zero new topics. Mistake notebook only.**
