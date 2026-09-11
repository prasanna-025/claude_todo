# ⚡ ACCENTURE CODING PRACTICE — 85 QUESTIONS & LEETCODE MASTER CHEAT SHEET

Comprehensive solutions, logic patterns, Python implementations, and LeetCode equivalents for all **85 Accenture Coding Questions**, along with the **Day-by-Day DSA & SQL LeetCode Master Schedule**.

---

## 📑 TABLE OF CONTENTS
1. [Day-by-Day DSA & SQL LeetCode Roadmap (Days 1–15)](#-part-1-day-by-day-dsa--sql-leetcode-roadmap)
2. [Section A: Important Questions (Q1–Q2)](#-section-a-important-questions)
3. [Section B: Array Story & Scenario Problems (Q3–Q27)](#-section-b-array-story--scenario-problems)
4. [Section C: String Story & Parsing Problems (Q28–Q47)](#-section-c-string-story--parsing-problems)
5. [Section D: Mixed Array + String Story Logic (Q48–Q65)](#-section-d-mixed-array--string-story-logic)
6. [Section E: Basic Array & String DSA (Q66–Q75)](#-section-e-basic-array--string-dsa)
7. [Section F: Binary Search & Binary Search on Answer (Q76–Q85)](#-section-f-binary-search-on-answer)

---

# 📅 PART 1: DAY-BY-DAY DSA & SQL LEETCODE ROADMAP

| Day | DSA Focus Area | Target LeetCode DSA Problems | SQL Focus Area | Target LeetCode SQL Queries |
| :---: | :--- | :--- | :--- | :--- |
| **Day 1** | **Arrays, Strings & Hashing** | • [LC 1: Two Sum](https://leetcode.com/problems/two-sum/)<br>• [LC 217: Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)<br>• [LC 242: Valid Anagram](https://leetcode.com/problems/valid-anagram/)<br>• [LC 268: Missing Number](https://leetcode.com/problems/missing-number/)<br>• [LC 344: Reverse String](https://leetcode.com/problems/reverse-string/)<br>• [LC 125: Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | **SELECT & Filtering** | • [LC 1757: Recyclable Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)<br>• [LC 584: Customer Referee](https://leetcode.com/problems/find-customer-referee/)<br>• [LC 595: Big Countries](https://leetcode.com/problems/big-countries/)<br>• [LC 1148: Article Views I](https://leetcode.com/problems/article-views-i/) |
| **Day 2** | **Sliding Window & Two Pointers** | • [LC 121: Best Time to Buy/Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)<br>• [LC 167: Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)<br>• [LC 11: Container With Most Water](https://leetcode.com/problems/container-with-most-water/)<br>• [LC 283: Move Zeroes](https://leetcode.com/problems/move-zeroes/)<br>• [LC 3: Longest Substring Without Repeat](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | **Aggregates & GROUP BY** | • [LC 620: Not Boring Movies](https://leetcode.com/problems/not-boring-movies/)<br>• [LC 1251: Average Selling Price](https://leetcode.com/problems/average-selling-price/)<br>• [LC 1075: Project Employees I](https://leetcode.com/problems/project-employees-i/)<br>• [LC 1633: Contest Percentage](https://leetcode.com/problems/percentage-of-users-attended-a-contest/) |
| **Day 3** | **Searching & Sorting** | • [LC 704: Binary Search](https://leetcode.com/problems/binary-search/)<br>• [LC 35: Search Insert Position](https://leetcode.com/problems/search-insert-position/)<br>• [LC 88: Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)<br>• [LC 75: Sort Colors](https://leetcode.com/problems/sort-colors/)<br>• [LC 33: Search in Rotated Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | **JOIN Operations** | • [LC 1378: Replace Employee ID](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)<br>• [LC 1068: Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/)<br>• [LC 1581: Visited Without Trans](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/)<br>• [LC 197: Rising Temperature](https://leetcode.com/problems/rising-temperature/) |
| **Day 4** | **Matrix & Stack** | • [LC 54: Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)<br>• [LC 48: Rotate Image](https://leetcode.com/problems/rotate-image/)<br>• [LC 73: Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)<br>• [LC 20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)<br>• [LC 155: Min Stack](https://leetcode.com/problems/min-stack/) | **Subqueries & CASE** | • [LC 176: Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)<br>• [LC 184: Department Highest Salary](https://leetcode.com/problems/department-highest-salary/)<br>• [LC 626: Exchange Seats](https://leetcode.com/problems/exchange-seats/)<br>• [LC 1907: Count Salary Categories](https://leetcode.com/problems/count-salary-categories/) |
| **Day 5** | **Timed Mock DSA** | • [LC 15: 3Sum](https://leetcode.com/problems/3sum/)<br>• [LC 49: Group Anagrams](https://leetcode.com/problems/group-anagrams/)<br>• [LC 53: Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)<br>• [LC 238: Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)<br>• [LC 56: Merge Intervals](https://leetcode.com/problems/merge-intervals/) | **Full SQL Mock (60 min)** | • [LC 180: Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/)<br>• [LC 1164: Product Price at Given Date](https://leetcode.com/problems/product-price-at-a-given-date/)<br>• [LC 1204: Last Person on Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/) |
| **Day 6** | **Linked List & Stacks** | • [LC 206: Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)<br>• [LC 21: Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)<br>• [LC 141: Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)<br>• [LC 19: Remove Nth Node](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | **Frontend / HTML Forms** | Practical input validation & form data capture |
| **Day 7** | **2D Matrix & Math/Bitwise** | • [LC 74: Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)<br>• [LC 136: Single Number](https://leetcode.com/problems/single-number/)<br>• [LC 191: Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)<br>• [LC 338: Counting Bits](https://leetcode.com/problems/counting-bits/) | **Frontend / CSS Flexbox** | Responsive grid & alignment |
| **Day 8** | **Two Pointers & Substrings** | • [LC 977: Squares of Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)<br>• [LC 438: Find All Anagrams](https://leetcode.com/problems/find-all-anagrams-in-a-string/)<br>• [LC 5: Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)<br>• [LC 724: Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | **Frontend / JS DOM** | Event listeners & DOM traversal |
| **Day 9** | **Binary Search & Monotonic Stack** | • [LC 162: Find Peak Element](https://leetcode.com/problems/find-peak-element/)<br>• [LC 875: Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)<br>• [LC 739: Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)<br>• [LC 912: Sort an Array](https://leetcode.com/problems/sort-an-array/) | **Frontend / ES6 Array** | `map()`, `filter()`, `reduce()` |
| **Day 10** | **Timed Speed Drill** | • 10 Fast Solves: LC 1, 121, 217, 20, 53, 238, 704, 11, 15, 206 | **Frontend / React.js** | `useState`, props, list mapping |
| **Day 11** | **Corner Cases & Binary Search Answers** | • [LC 41: First Missing Positive](https://leetcode.com/problems/first-missing-positive/)<br>• [LC 42: Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)<br>• [LC 287: Find Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)<br>• [LC 1011: Capacity to Ship Packages](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | **React State & Effects** | `useEffect` & fetch patterns |
| **Day 12** | **Mixed Rotation (12 Problems)** | • LC 1, 15, 20, 53, 75, 121, 125, 206, 217, 238, 242, 704 | **SQL + Frontend + Python** | Mixed speed drill |
| **Day 13** | **Technical Mock + Weak Areas** | • Target 8 problems previously missed / slow | **Full Mock Prep** | Technical 45-min simulation |
| **Day 14** | **Coding Assessment Simulation** | • Full 60-min test: 1 Python/DSA + 1 SQL + 1 Frontend | **Full 60-min Test** | Real exam conditions |
| **Day 15** | **Final Sequence Simulation** | • Mistake notebook only. Top 5 DSA patterns review | **Review Only** | Final polish |

---

# 🚀 SECTION A: IMPORTANT QUESTIONS

### Q1. Array Transformation
**Problem**: For every index `i` of `nums`:
- Subtract `(i % 7) * 3` from `nums[i]`.
- If original `nums[i]` is divisible by `11`, add `nums[i] // 11`.
- Return the total sum after transformation.

```python
def arrayTransformation(nums):
    total = 0
    for i, x in enumerate(nums):
        new_val = x - (i % 7) * 3
        if x % 11 == 0:
            new_val += x // 11
        total += new_val
    return total

# Example: [11, 14, 22] -> index 0: 11 - 0 + 1 = 12; index 1: 14 - 3 = 11; index 2: 22 - 6 + 2 = 18. Total = 41
```
* **Complexity**: $O(N)$ Time, $O(1)$ Space.
* **LeetCode Equivalent**: Array Simulation (e.g. [LC 1480](https://leetcode.com/problems/running-sum-of-1d-array/)).

---

### Q2. Equivalent Prefix Sum
**Problem**: For integer `x`, `eqSum(x)` is the sum of all prefix numbers of `x`.
e.g. `eqSum(123) = 1 + 12 + 123 = 136`.
Given `n`, count integers `x` such that $1 \le x < n$ and `eqSum(x) > n`.

```python
def eqSum(x):
    s = str(x)
    total = 0
    curr = 0
    for ch in s:
        curr = curr * 10 + int(ch)
        total += curr
    return total

def countEquivalentPrefixSum(n):
    count = 0
    for x in range(1, n):
        if eqSum(x) > n:
            count += 1
    return count
```
* **Complexity**: $O(n \cdot \log_{10} n)$ Time.

---

# 📦 SECTION B: ARRAY STORY / SCENARIO PROBLEMS

### Q3. Count Even and Odd Numbers
```python
def countEvenOdd(arr):
    evens = sum(1 for x in arr if x % 2 == 0)
    return evens, len(arr) - evens
```
* **LC Equivalent**: [LC 1295 — Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

### Q4. Count Positive, Negative and Zero
```python
def countSigns(arr):
    pos = sum(1 for x in arr if x > 0)
    neg = sum(1 for x in arr if x < 0)
    zero = len(arr) - pos - neg
    return pos, neg, zero
```

### Q5. Sum and Average
```python
def sumAndAvg(arr):
    if not arr: return 0, 0
    s = sum(arr)
    return s, s / len(arr)
```

### Q6. Maximum and Minimum
```python
def maxMin(arr):
    return max(arr), min(arr)
```

### Q7. Count Elements Divisible by K
```python
def countDivisibleByK(arr, K):
    return sum(1 for x in arr if x % K == 0)
```

### Q8. Count Elements Greater Than X
```python
def countGreaterThanX(arr, X):
    return sum(1 for x in arr if x > X)
```

### Q9. Count Elements Less Than X
```python
def countLessThanX(arr, X):
    return sum(1 for x in arr if x < X)
```

### Q10. Sum of Even Elements
```python
def sumEven(arr):
    return sum(x for x in arr if x % 2 == 0)
```

### Q11. Sum of Odd Elements
```python
def sumOdd(arr):
    return sum(x for x in arr if x % 2 != 0)
```

### Q12. Product Discount
**Rules**: Price > 1000 → 10% off; 500 to 1000 → 5% off; else no discount.
```python
def totalAfterDiscount(prices):
    total = 0.0
    for p in prices:
        if p > 1000: total += p * 0.90
        elif p >= 500: total += p * 0.95
        else: total += p
    return total
```
* **LC Equivalent**: [LC 1475 — Final Prices With a Special Discount](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)

### Q13. Employee Bonus
**Rules**: Salary < 20000 → 5000; 20000–40000 → 3000; > 40000 → 1000.
```python
def totalBonus(salaries):
    bonus = 0
    for s in salaries:
        if s < 20000: bonus += 5000
        elif s <= 40000: bonus += 3000
        else: bonus += 1000
    return bonus
```

### Q14. Game Points
**Rules**: Score $\ge$ 80 → +10; Score < 40 → -5; else no change.
```python
def finalGamePoints(scores):
    total = sum(scores)
    for s in scores:
        if s >= 80: total += 10
        elif s < 40: total -= 5
    return total
```

### Q15. Bank Penalty
**Rules**: Deduct 20 penalty if balance < 1000 after any transaction.
```python
def finalBalance(B, transactions):
    for t in transactions:
        B += t
        if B < 1000:
            B -= 20
    return B
```

### Q16. Delivery Charge
**Rules**: Order $\ge$ 500 → Free delivery; < 500 → +40 delivery charge.
```python
def totalWithDelivery(orders):
    return sum(o if o >= 500 else o + 40 for o in orders)
```

### Q17. Grace Marks
**Rules**: If mark < 33, replace with 33. Find new average.
```python
def graceMarksAverage(marks):
    adjusted = [max(m, 33) for m in marks]
    return sum(adjusted) / len(adjusted) if adjusted else 0
```

### Q18. Sales Incentive
**Rules**: Sales $\le$ 10000 → 5%; Sales > 10000 → 10%.
```python
def totalIncentive(sales):
    return sum(s * 0.05 if s <= 10000 else s * 0.10 for s in sales)
```

### Q19. Buy 2 Get 1 Free
**Rules**: Groups of 3. In every group, cheapest item is free.
```python
def buy2Get1Free(prices):
    total = 0
    for i in range(0, len(prices), 3):
        group = prices[i:i+3]
        if len(group) == 3:
            total += sum(group) - min(group)
        else:
            total += sum(group)
    return total
```

### Q20. Taxi Fare
**Rules**: First 5 km @ 50/km; next 10 km @ 40/km; beyond 15 km @ 30/km.
```python
def taxiFare(dist):
    if dist <= 5: return dist * 50
    elif dist <= 15: return 5 * 50 + (dist - 5) * 40
    else: return 5 * 50 + 10 * 40 + (dist - 15) * 30
```

### Q21. Festival Bonus
**Rules**: Tenure $\ge$ 5 yrs → 20%; 2–4 yrs → 10%; < 2 yrs → 5%.
```python
def festivalBonus(employees): # employees = [(salary, tenure)]
    total = 0
    for sal, tenure in employees:
        if tenure >= 5: total += sal * 0.20
        elif tenure >= 2: total += sal * 0.10
        else: total += sal * 0.05
    return total
```

### Q22. Scholarship
**Rules**: Marks $\ge$ 90 → 100% fees; 75–89 → 50% fees; else 0%.
```python
def scholarshipFees(students): # students = [(marks, fees)]
    collected = 0
    for m, f in students:
        if m >= 90: collected += f
        elif m >= 75: collected += f * 0.50
    return collected
```

### Q23. Target Incentive
**Rules**: Sales $\ge$ target → 10% of sales; else 0.
```python
def targetIncentive(sales, target):
    return sum(s * 0.10 for s in sales if s >= target)
```

### Q24. Mobile Bill
**Rules**: First 100 units @ 1.0; next 200 units @ 0.8; above 300 units @ 0.5.
```python
def mobileBill(units):
    if units <= 100: return units * 1.0
    elif units <= 300: return 100 * 1.0 + (units - 100) * 0.8
    else: return 100 * 1.0 + 200 * 0.8 + (units - 300) * 0.5
```

### Q25. Gym Discount
**Rules**: Fee 1000. Attendance $\ge$ 20 days → 20% discount (fee = 800); else 1000.
```python
def gymRevenue(attendances):
    return sum(800 if days >= 20 else 1000 for days in attendances)
```

### Q26. Adjusted Average Salary
**Rules**: Remove one minimum and one maximum, average remainder.
```python
def adjustedAverageSalary(salaries):
    # LC 1491 Equivalent
    return (sum(salaries) - min(salaries) - max(salaries)) / (len(salaries) - 2)
```
* **LC Equivalent**: [LC 1491 — Average Salary Excluding the Minimum and Maximum](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

### Q27. Second Item 50% Off
**Rules**: Consecutive pairs `(p1, p2)`. Second item gets 50% off.
```python
def secondItemHalfOff(prices):
    total = 0
    for i in range(0, len(prices), 2):
        total += prices[i]
        if i + 1 < len(prices):
            total += prices[i + 1] * 0.50
    return total
```

---

# 🔤 SECTION C: STRING STORY / PARSING PROBLEMS

### Q28. Extract Numbers and Find Sum
```python
import re
def sumExtractedNumbers(s):
    nums = [int(x) for x in re.findall(r'\d+', s)]
    return sum(nums)
```

### Q29. Count Numbers in a String
```python
import re
def countNumbersInString(s):
    return len(re.findall(r'\d+', s))
```

### Q30. Average of Extracted Numbers
```python
import re
def avgExtractedNumbers(s):
    nums = [int(x) for x in re.findall(r'\d+', s)]
    return sum(nums) / len(nums) if nums else 0
```

### Q31. Maximum Extracted Number
```python
import re
def maxExtractedNumber(s):
    nums = [int(x) for x in re.findall(r'\d+', s)]
    return max(nums) if nums else None
```

### Q32. Count Even Extracted Numbers
```python
import re
def countEvenExtracted(s):
    nums = [int(x) for x in re.findall(r'\d+', s)]
    return sum(1 for x in nums if x % 2 == 0)
```

### Q33. Reverse a String
```python
def reverseString(s):
    return s[::-1]
```
* **LC Equivalent**: [LC 344 — Reverse String](https://leetcode.com/problems/reverse-string/)

### Q34. Palindrome String (Ignore Case)
```python
def isPalindrome(s):
    clean = "".join(c.lower() for c in s if c.isalnum())
    return clean == clean[::-1]
```
* **LC Equivalent**: [LC 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

### Q35. Count Vowels and Consonants
```python
def countVowelsConsonants(s):
    vowels = set("aeiouAEIOU")
    v = sum(1 for c in s if c in vowels)
    c = sum(1 for c in s if c.isalpha() and c not in vowels)
    return v, c
```

### Q36. Count Uppercase and Lowercase
```python
def countCase(s):
    upper = sum(1 for c in s if c.isupper())
    lower = sum(1 for c in s if c.islower())
    return upper, lower
```

### Q37. First Non-Repeating Character
```python
from collections import Counter
def firstNonRepeating(s):
    counts = Counter(s)
    for c in s:
        if counts[c] == 1:
            return c
    return ""
```
* **LC Equivalent**: [LC 387 — First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

### Q38. Remove Duplicate Characters (Preserve First Occurrence)
```python
def removeDuplicates(s):
    seen = set()
    res = []
    for c in s:
        if c not in seen:
            seen.add(c)
            res.append(c)
    return "".join(res)
```

### Q39. String Compression
Example: `aaabbcccc` → `a3b2c4`.
```python
def stringCompression(s):
    if not s: return ""
    res = []
    curr_char, count = s[0], 1
    for c in s[1:]:
        if c == curr_char:
            count += 1
        else:
            res.append(f"{curr_char}{count}")
            curr_char, count = c, 1
    res.append(f"{curr_char}{count}")
    return "".join(res)
```
* **LC Equivalent**: [LC 443 — String Compression](https://leetcode.com/problems/string-compression/)

### Q40. Words Longer Than 5
```python
def countWordsLongerThan5(sentence):
    return sum(1 for w in sentence.split() if len(w) > 5)
```

### Q41. Reverse Words
```python
def reverseWords(sentence):
    return " ".join(sentence.split()[::-1])
```
* **LC Equivalent**: [LC 151 — Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)

### Q42. Code Amount (`P100`, `D20`)
```python
def codeAmount(codes):
    net = 0
    for code in codes:
        val = int(code[1:])
        if code[0] == 'P': net += val
        elif code[0] == 'D': net -= val
    return net
```

### Q43. Passed Marks (`S85`, `F30`)
```python
def passedMarks(records):
    return sum(int(r[1:]) for r in records if r.startswith('S'))
```

### Q44. Deposit and Withdrawal with Penalty
**Rules**: `D100` deposit, `W50` withdrawal. Initial 0. If balance < 500, deduct 10 penalty.
```python
def bankTransactions(txns):
    bal = 0
    for t in txns:
        op, amt = t[0], int(t[1:])
        if op == 'D': bal += amt
        elif op == 'W': bal -= amt
        if bal < 500: bal -= 10
    return bal
```

### Q45. Adjust Marks
**Rules**: Marks $\ge$ 80 → +5; Marks < 40 → +10; else unchanged. Return average.
```python
def adjustMarks(mark_strs):
    nums = [int(m) for m in mark_strs]
    adjusted = []
    for m in nums:
        if m >= 80: adjusted.append(m + 5)
        elif m < 40: adjusted.append(m + 10)
        else: adjusted.append(m)
    return sum(adjusted) / len(adjusted) if adjusted else 0
```

### Q46. ID Filtering
**Rules**: Starts with 'A' or 'B' and numeric value > 100.
```python
def countFilteredIDs(ids):
    count = 0
    for item in ids:
        if item and item[0] in ('A', 'B') and item[1:].isdigit():
            if int(item[1:]) > 100:
                count += 1
    return count
```

### Q47. Username Filtering
**Rules**: Length $\ge$ 5 and contains `"user"` (case-insensitive).
```python
def filterUsernames(usernames):
    return sum(1 for u in usernames if len(u) >= 5 and "user" in u.lower())
```

---

# 🧩 SECTION D: MIXED ARRAY + STRING STORY LOGIC

### Q48. Prefix-Based Multiplication
**Rules**: `X` $\to \times 2$, `Y` $\to \times 3$, `Z` $\to \times 1$.
```python
def prefixMultiply(codes):
    mult = {'X': 2, 'Y': 3, 'Z': 1}
    return sum(int(c[1:]) * mult.get(c[0], 1) for c in codes)
```

### Q49. Numeric String Filtering
```python
def numericFilter(arr):
    nums = [int(x) for x in arr if x.isdigit()]
    return sum(nums), sum(nums) / len(nums) if nums else 0
```

### Q50. Status and Marks
```python
def passedTotalMarks(statuses, marks):
    return sum(m for s, m in zip(statuses, marks) if s == 'P')
```

### Q51. Prices as Strings
```python
def discountedPrices(price_strs):
    total = 0.0
    for ps in price_strs:
        p = float(ps)
        total += p * 0.90 if p > 200 else p * 0.95
    return total
```

### Q52. Time Comparison (After 12:00)
```python
def countAfterNoon(times):
    # times = ["09:30", "13:15", "18:45"]
    return sum(1 for t in times if t > "12:00")
```

### Q53. Country Codes (`IN100`, `US200`)
```python
def countryTotals(codes):
    in_total, other_total = 0, 0
    for c in codes:
        val = int(c[2:])
        if c.startswith("IN"): in_total += val
        else: other_total += val
    return in_total, other_total
```

### Q54. Two Numbers with Target Sum
```python
def twoSumStrings(num_strs, target):
    # LC 1 Equivalent
    seen = set()
    for s in num_strs:
        val = int(s)
        if target - val in seen:
            return True
        seen.add(val)
    return False
```
* **LC Equivalent**: [LC 1 — Two Sum](https://leetcode.com/problems/two-sum/)

### Q55. Prefix with Maximum Total
```python
from collections import defaultdict
def maxPrefixTotal(codes):
    totals = defaultdict(int)
    for c in codes:
        prefix, val = c[0], int(c[1:])
        totals[prefix] += val
    best_p = max(totals, key=totals.get)
    return best_p, totals[best_p]
```

### Q56. Order Discount
**Rules**: Prime $\to$ 10% off; Non-prime $\ge$ 1000 $\to$ 5% off; else 0%.
```python
def orderDiscount(orders): # (amount, isPrime)
    total = 0
    for amt, is_prime in orders:
        if is_prime: total += amt * 0.90
        elif amt >= 1000: total += amt * 0.95
        else: total += amt
    return total
```

### Q57. Employee Department Bonus
**Rules**: IT $\to$ 10%; Other $\to$ 5%.
```python
def deptBonus(employees): # (salary, dept)
    return sum(sal * 0.10 if dept == "IT" else sal * 0.05 for sal, dept in employees)
```

### Q58. Customer Discount
**Rules**: Age $\ge$ 60 $\to$ 15%; else if purchase $\ge$ 5000 $\to$ 10%; else 5%.
```python
def customerDiscount(customers): # (age, purchaseAmount)
    total = 0
    for age, p in customers:
        if age >= 60: total += p * 0.85
        elif p >= 5000: total += p * 0.90
        else: total += p * 0.95
    return total
```

### Q59. Student Scholarship
**Rules**: Marks $\ge$ 75 & Att $\ge$ 90 $\to$ 100% fees; Marks $\ge$ 60 & Att $\ge$ 75 $\to$ 50%; else 0%.
```python
def studentScholarship(students, base_fee=10000): # (marks, attendance)
    collected = 0
    for m, a in students:
        if m >= 75 and a >= 90: collected += base_fee
        elif m >= 60 and a >= 75: collected += base_fee * 0.50
    return collected
```

### Q60. Order Revenue
**Rules**: `qty * price`. If COD, add 50; else free shipping.
```python
def orderRevenue(orders): # (quantity, price, isCod)
    return sum(q * p + (50 if is_cod else 0) for q, p, is_cod in orders)
```

### Q61. Employee Rating Bonus
**Rules**: Rating $\ge$ 4 $\to$ 20%; Rating == 3 $\to$ 10%; else 0.
```python
def ratingBonus(employees): # (baseSalary, rating)
    total = 0
    for sal, r in employees:
        if r >= 4: total += sal * 1.20
        elif r == 3: total += sal * 1.10
        else: total += sal
    return total
```

### Q62. Product Tax
**Rules**: Electronics $\to$ 10%; Groceries $\to$ 5%; Others $\to$ 8%.
```python
def productTax(products): # (price, category)
    tax_rates = {"Electronics": 0.10, "Groceries": 0.05}
    return sum(p * (1 + tax_rates.get(cat, 0.08)) for p, cat in products)
```

### Q63. Booking Surge
**Rules**: Weekend $\to$ 20% surge; Weekday $\to$ 10% surge.
```python
def bookingSurge(bookings): # (baseFare, isWeekend)
    return sum(fare * (1.20 if is_wknd else 1.10) for fare, is_wknd in bookings)
```

### Q64. Rider Bonus
**Rules**: Rides $\ge$ 100 & Rating $\ge$ 4.5 $\to$ 5000 bonus; else 0.
```python
def riderBonus(riders): # (rides, rating)
    return sum(5000 for rides, r in riders if rides >= 100 and r >= 4.5)
```

### Q65. Coupon Discount
**Rules**: `SAVE10` $\to$ 10% off; `SAVE20` $\to$ 20% off; other $\to$ no discount.
```python
def couponDiscount(orders): # (amount, coupon)
    total = 0
    for amt, c in orders:
        if c == "SAVE10": total += amt * 0.90
        elif c == "SAVE20": total += amt * 0.80
        else: total += amt
    return total
```

---

# 🧠 SECTION E: BASIC ARRAY & STRING DSA

### Q66. Reverse an Array
```python
def reverseArray(arr):
    return arr[::-1]
```

### Q67. Second Largest Element
```python
def secondLargest(arr):
    unique = list(set(arr))
    if len(unique) < 2: return None
    unique.sort()
    return unique[-2]
```

### Q68. Remove Duplicates from Sorted Array
```python
def removeDuplicates(nums):
    # LC 26 Equivalent
    if not nums: return 0
    k = 1
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            nums[k] = nums[i]
            k += 1
    return k
```
* **LC Equivalent**: [LC 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

### Q69. Move Zeros to the End
```python
def moveZeroes(nums):
    # LC 283 Equivalent
    pos = 0
    for x in nums:
        if x != 0:
            nums[pos] = x
            pos += 1
    while pos < len(nums):
        nums[pos] = 0
        pos += 1
    return nums
```
* **LC Equivalent**: [LC 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)

### Q70. Check if Array is Sorted
```python
def isSorted(arr):
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
```
* **LC Equivalent**: [LC 1752 — Check if Array Is Sorted and Rotated](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

### Q71. Rotate Array Right by K
```python
def rotateArray(nums, k):
    # LC 189 Equivalent
    k %= len(nums)
    nums[:] = nums[-k:] + nums[:-k]
    return nums
```
* **LC Equivalent**: [LC 189 — Rotate Array](https://leetcode.com/problems/rotate-array/)

### Q72. Check Anagrams
```python
from collections import Counter
def isAnagram(s, t):
    # LC 242 Equivalent
    return Counter(s) == Counter(t)
```
* **LC Equivalent**: [LC 242 — Valid Anagram](https://leetcode.com/problems/valid-anagram/)

### Q73. Longest Word in a Sentence
```python
def longestWord(sentence):
    words = sentence.split()
    return max(words, key=len) if words else ""
```

### Q74. Most Frequent Character
```python
from collections import Counter
def mostFrequentChar(s):
    return Counter(s).most_common(1)[0][0] if s else ""
```

### Q75. First Non-Repeating Character (Array / Dict Scan)
```python
def firstUniqChar(s):
    # LC 387 Equivalent
    freq = {}
    for c in s: freq[c] = freq.get(c, 0) + 1
    for i, c in enumerate(s):
        if freq[c] == 1: return i
    return -1
```
* **LC Equivalent**: [LC 387 — First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

---

# 🎯 SECTION F: BINARY SEARCH ON ANSWER

### Q76. Minimum X for Sum Condition
**Problem**: Find min `X` such that $\sum_{arr[i] > X} arr[i] \le K$.
```python
def minXForSum(arr, K):
    low, high = 0, max(arr)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        sum_gt = sum(x for x in arr if x > mid)
        if sum_gt <= K:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```

### Q77. Minimum Ship Capacity within D Days
```python
def shipWithinDays(weights, D):
    # LC 1011 Equivalent
    def canShip(cap):
        days, curr = 1, 0
        for w in weights:
            if curr + w > cap:
                days += 1
                curr = 0
            curr += w
        return days <= D

    low, high = max(weights), sum(weights)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        if canShip(mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```
* **LC Equivalent**: [LC 1011 — Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

### Q78. Allocate Books
**Problem**: Minimize maximum pages allocated to any of $M$ students.
```python
def allocateBooks(pages, M):
    if M > len(pages): return -1
    def isValid(max_p):
        students, curr = 1, 0
        for p in pages:
            if curr + p > max_p:
                students += 1
                curr = 0
            curr += p
        return students <= M

    low, high = max(pages), sum(pages)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        if isValid(mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```
* **LC Equivalent**: [LC 410 — Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

### Q79. Minimum Time to Complete K Tasks
```python
def minTimeKTasks(times, K):
    # LC 2187 Equivalent
    low, high = 1, min(times) * K
    ans = high
    while low <= high:
        mid = (low + high) // 2
        tasks_done = sum(mid // t for t in times)
        if tasks_done >= K:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```
* **LC Equivalent**: [LC 2187 — Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/)

### Q80. Aggressive Cows (Maximize Minimum Distance)
```python
def aggressiveCows(stalls, C):
    stalls.sort()
    def canPlace(dist):
        count, last = 1, stalls[0]
        for s in stalls[1:]:
            if s - last >= dist:
                count += 1
                last = s
        return count >= C

    low, high = 1, stalls[-1] - stalls[0]
    ans = 0
    while low <= high:
        mid = (low + high) // 2
        if canPlace(mid):
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return ans
```
* **LC Equivalent**: [LC 1552 — Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)

### Q81. Smallest Divisor
Given array and integer $S$, find min $D$ such that $\sum \lceil arr[i] / D \rceil \le S$.
```python
import math
def smallestDivisor(nums, threshold):
    # LC 1283 Equivalent
    low, high = 1, max(nums)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        total = sum(math.ceil(x / mid) for x in nums)
        if total <= threshold:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans
```
* **LC Equivalent**: [LC 1283 — Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)

### Q82. Minimum Reduction Value
Find minimum $X$ such that reducing every element $> X$ to $X$ results in $\sum \le \text{target}$.
```python
def minReductionValue(arr, target):
    low, high = 0, max(arr)
    ans = high
    while low <= high:
        mid = (low + high) // 2
        curr_sum = sum(min(x, mid) for x in arr)
        if curr_sum <= target:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return ans
```

### Q83. Maximum Average Subarray of Length $\ge K$
```python
def findMaxAverage(nums, k):
    # LC 643 for length == k
    curr = sum(nums[:k])
    max_sum = curr
    for i in range(k, len(nums)):
        curr += nums[i] - nums[i - k]
        max_sum = max(max_sum, curr)
    return max_sum / k
```
* **LC Equivalent**: [LC 643 — Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

### Q84. K-th Smallest Element via Value Binary Search
```python
def kthSmallest(nums, k):
    low, high = min(nums), max(nums)
    while low <= high:
        mid = (low + high) // 2
        count = sum(1 for x in nums if x <= mid)
        if count < k:
            low = mid + 1
        else:
            ans = mid
            high = mid - 1
    return ans
```
* **LC Equivalent**: [LC 378 — Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

### Q85. Equalize Array
**Problem**: In one operation, increase $N - 1$ elements by 1. Find min operations to make all equal.
* **Mathematical Insight**: Increasing $N - 1$ elements by 1 is mathematically identical to **decreasing 1 element by 1**!
* Therefore, minimum operations = $\sum (arr[i] - \min(arr))$.
```python
def minMoves(nums):
    # LC 453 Equivalent
    min_val = min(nums)
    return sum(x - min_val for x in nums)
```
* **LC Equivalent**: [LC 453 — Minimum Moves to Equal Array Elements](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/)
