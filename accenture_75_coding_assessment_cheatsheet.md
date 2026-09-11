# ⚡ ACCENTURE CODING ASSESSMENT — 75 QUESTIONS MASTER CHEAT SHEET
Complete problem statements, logic breakdowns, optimal Python 3 solutions (with input parsing), C++/Java logic snippets, time & space complexities, and LeetCode equivalents for all **75 Accenture Backend / Coding Practice Questions**.

---
## 📑 TABLE OF CONTENTS
- [Section A: Array Story / Scenario Logic (Q1–Q15)](#-section-a--array-story--scenario-logic-q1q15)- [Section B: More Array Scenarios (Q16–Q32)](#️-section-b--more-array-scenarios-q16q32)- [Section C: Array Patterns (Q33–Q50)](#-section-c--array-patterns-q33q50)- [Section D: String / Parsing (Q51–Q70)](#-section-d--string--parsing-q51q70)- [Section E: Searching & Basic DSA (Q71–Q75)](#-section-e--searching--basic-dsa-q71q75)- [Final Pattern Checklist & Formula Quick Reference](#-final-pattern-checklist--quick-reference)

---


---

## 📦 SECTION A — ARRAY STORY / SCENARIO LOGIC (Q1–Q15)

Foundational business logic: percentage discounts, bonuses, penalties, taxi fares, electricity slabs & accumulator patterns.

---

### Q1. Index-Based Array Transformation
* **Pattern**: `Index-Based Transformation & Accumulator` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 1480 — Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

### Problem Statement

Given an array of `N` integers, transform every element at index `i` (0-based):

* Subtract `(i % 7) × 3`.

* If the original value is divisible by `11`, add `original value / 11`.

Find the sum of the transformed array.

### Input Format

* First line: `N`

* Second line: `N` integers.

### Output Format

Print the sum of the transformed array.

### Constraints

`1 ≤ N ≤ 10^5`

### Test Case 1

```text

Input

5

11 20 33 40 50

Output

158

```

### Test Case 2

```text

Input

3

22 10 15

Output

47

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    nums = [int(x) for x in tokens[1:n+1]]
    total = 0
    for i in range(n):
        val = nums[i] - (i % 7) * 3
        if nums[i] % 11 == 0:
            val += nums[i] // 11
        total += val
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    long long val = nums[i] - (i % 7) * 3;
    if (nums[i] % 11 == 0) val += nums[i] / 11;
    total += val;
}
cout << total << endl;
```

---

### Q2. Prefix Number Sum
* **Pattern**: `Math / Prefix Number Simulation` | **Time**: `O(N * log10(N))` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 204 — Count Primes (Number Simulation)](https://leetcode.com/problems/count-primes/)

### Problem Statement

For a positive integer `X`, define `eqSum(X)` as the sum of all prefix numbers of `X`.

For example:

`X = 123`

Prefixes are `1, 12, 123`.

Therefore:

`eqSum(123) = 1 + 12 + 123 = 136`.

Given `N`, count the integers `X` such that:

`1 ≤ X < N`

and

`eqSum(X) > N`.

### Input Format

A single integer `N`.

### Output Format

Print the count.

### Constraints

`1 ≤ N ≤ 10^6`

### Test Case 1

```text

Input

20

Output

0

```

### Test Case 2

```text

Input

10

Output

0

```

---

#### 💡 Optimal Python 3 Solution
```python
def eq_sum(x):
    s = str(x)
    total = 0
    cur = 0
    for ch in s:
        cur = cur * 10 + int(ch)
        total += cur
    return total

def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    count = 0
    for x in range(1, n):
        if eq_sum(x) > n:
            count += 1
    print(count)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long eqSum(long long x) {
    string s = to_string(x);
    long long total = 0, cur = 0;
    for (char c : s) {
        cur = cur * 10 + (c - '0');
        total += cur;
    }
    return total;
}
int count = 0;
for (int x = 1; x < n; x++) {
    if (eqSum(x) > n) count++;
}
cout << count << endl;
```

---

### Q3. Shop Discount
* **Pattern**: `Tiered Percentage Discount` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 1475 — Final Prices With a Special Discount](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)

### Problem Statement

A shop applies discounts:

* Price > 1000 → 10% discount

* Price from 500 to 1000 → 5% discount

* Below 500 → no discount

Find the final total price.

### Input Format

```text

N

price1 price2 ... priceN

```

### Output Format

Print the final amount with 2 decimal places.

### Constraints

`1 ≤ N ≤ 10^5`

### Test Case 1

```text

Input

4

400 600 1000 1500

Output

3250.00

```

### Test Case 2

```text

Input

3

500 1200 200

Output

1580.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    prices = [float(x) for x in tokens[1:n+1]]
    total = 0.0
    for p in prices:
        if p > 1000:
            total += p * 0.90
        elif p >= 500:
            total += p * 0.95
        else:
            total += p
    print(f"{total:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double total = 0.0;
for (double p : prices) {
    if (p > 1000) total += p * 0.90;
    else if (p >= 500) total += p * 0.95;
    else total += p;
}
cout << fixed << setprecision(2) << total << endl;
```

---

### Q4. Employee Bonus
* **Pattern**: `Multi-tier Salary Bonus Accumulator` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=salary)

### Problem Statement

An employee receives a bonus:

* Salary < 20000 → 5000

* Salary 20000–40000 → 3000

* Salary > 40000 → 1000

Find the total salary including bonuses.

### Input Format

```text

N

salary1 salary2 ... salaryN

```

### Output Format

Print the total amount.

### Test Case 1

```text

Input

4

15000 25000 40000 50000

Output

148000

```

### Test Case 2

```text

Input

3

10000 20000 50000

Output

88000

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    salaries = [int(x) for x in tokens[1:n+1]]
    total = 0
    for s in salaries:
        bonus = 5000 if s < 20000 else (3000 if s <= 40000 else 1000)
        total += s + bonus
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int s : salaries) {
    int bonus = (s < 20000) ? 5000 : (s <= 40000 ? 3000 : 1000);
    total += s + bonus;
}
cout << total << endl;
```

---

### Q5. Game Score
* **Pattern**: `Score Adjustment Rules` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 682 — Baseball Game](https://leetcode.com/problems/baseball-game/)

### Problem Statement

For each score:

* Score >= 80 → add 10

* Score < 40 → subtract 5

* Otherwise → unchanged

Find the final total score.

### Input Format

```text

N

score1 score2 ... scoreN

```

### Output Format

Print the final score.

### Test Case 1

```text

Input

5

90 35 60 80 20

Output

280

```

### Test Case 2

```text

Input

4

100 30 50 70

Output

245

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    scores = [int(x) for x in tokens[1:n+1]]
    total = 0
    for s in scores:
        if s >= 80: total += s + 10
        elif s < 40: total += s - 5
        else: total += s
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int s : scores) {
    if (s >= 80) total += s + 10;
    else if (s < 40) total += s - 5;
    else total += s;
}
cout << total << endl;
```

---

### Q6. Bank Transactions
* **Pattern**: `Sequential Transaction Ledger with Penalty Trigger` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 2169 — Count Operations to Obtain Zero](https://leetcode.com/problems/count-operations-to-obtain-zero/)

### Problem Statement

Given an initial balance and transactions:

* `D amount` → deposit

* `W amount` → withdrawal

After every transaction, if the balance becomes less than `1000`, deduct a penalty of `20`.

### Input Format

```text

initialBalance

N

type amount

type amount

...

```

### Output Format

Print the final balance.

### Test Case 1

```text

Input

5000

4

W 3000

D 500

W 1000

D 2000

Output

3480

```

### Test Case 2

```text

Input

1500

2

W 600

D 100

Output

980

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    bal = int(tokens[0])
    n = int(tokens[1])
    idx = 2
    for _ in range(n):
        t_type = tokens[idx]
        amt = int(tokens[idx+1])
        idx += 2
        if t_type == 'D':
            bal += amt
        elif t_type == 'W':
            bal -= amt
        if bal < 1000:
            bal -= 20
    print(bal)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long bal = initialBalance;
for (int i = 0; i < n; i++) {
    char type; long long amt;
    cin >> type >> amt;
    if (type == 'D') bal += amt;
    else if (type == 'W') bal -= amt;
    if (bal < 1000) bal -= 20;
}
cout << bal << endl;
```

---

### Q7. Delivery Charge
* **Pattern**: `Threshold Delivery Fee Logic` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

For every order:

* Amount >= 500 → free delivery

* Amount < 500 → delivery charge = 40

Find the total amount including delivery charges.

### Input Format

```text

N

amount1 amount2 ... amountN

```

### Output Format

Print the total amount.

### Test Case 1

```text

Input

4

600 300 500 200

Output

1720

```

### Test Case 2

```text

Input

3

100 200 700

Output

1080

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    amounts = [int(x) for x in tokens[1:n+1]]
    total = sum(amt + (40 if amt < 500 else 0) for amt in amounts)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int amt : amounts) {
    total += amt + (amt < 500 ? 40 : 0);
}
cout << total << endl;
```

---

### Q8. Grace Marks
* **Pattern**: `Conditional Floor Transformation & Average` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=average)

### Problem Statement

If a student's mark is below `33`, change it to `33`.

Find the average after applying the rule.

### Input Format

```text

N

mark1 mark2 ... markN

```

### Output Format

Print the average with 2 decimal places.

### Test Case 1

```text

Input

5

20 30 40 50 60

Output

43.20

```

### Test Case 2

```text

Input

4

10 20 30 40

Output

34.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    marks = [int(x) for x in tokens[1:n+1]]
    adjusted = [max(m, 33) for m in marks]
    avg = sum(adjusted) / n
    print(f"{avg:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double sum = 0;
for (int m : marks) sum += max(m, 33);
cout << fixed << setprecision(2) << (sum / n) << endl;
```

---

### Q9. Sales Incentive
* **Pattern**: `Sales Commission Calculation` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=sales)

### Problem Statement

A salesperson receives:

* Sales <= 10000 → 5%

* Sales > 10000 → 10%

Find the total incentive.

### Input Format

```text

N

sales1 sales2 ... salesN

```

### Output Format

Print the total incentive with 2 decimal places.

### Test Case 1

```text

Input

3

5000 10000 20000

Output

2250.00

```

### Test Case 2

```text

Input

2

8000 15000

Output

1900.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    sales = [float(x) for x in tokens[1:n+1]]
    incentive = sum(s * 0.05 if s <= 10000 else s * 0.10 for s in sales)
    print(f"{incentive:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double totalInc = 0;
for (double s : sales) {
    totalInc += (s <= 10000) ? s * 0.05 : s * 0.10;
}
cout << fixed << setprecision(2) << totalInc << endl;
```

---

### Q10. Buy 2 Get 1 Free
* **Pattern**: `Greedy Grouping / Buy 2 Get 1 Free` | **Time**: `O(N log N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 2144 — Minimum Cost of Buying Candies With Discount](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/)

### Problem Statement

For every group of three products, the cheapest product is free.

Find the minimum amount that must be paid.

### Input Format

```text

N

price1 price2 ... priceN

```

### Output Format

Print the amount to pay.

### Test Case 1

```text

Input

6

100 200 300 400 500 600

Output

1500

```

### Test Case 2

```text

Input

3

100 200 300

Output

500

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    prices = [int(x) for x in tokens[1:n+1]]
    prices.sort(reverse=True)
    total = sum(prices[i] for i in range(n) if (i % 3) != 2)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
sort(prices.rbegin(), prices.rend());
long long total = 0;
for (int i = 0; i < n; i++) {
    if (i % 3 != 2) total += prices[i];
}
cout << total << endl;
```

---

### Q11. Taxi Fare
* **Pattern**: `Slab-Based Taxi Fare Calculation` | **Time**: `O(1)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=math)

### Problem Statement

Taxi fare is calculated as:

* First 5 km → 50/km

* Next 10 km → 40/km

* Above 15 km → 30/km

Find the total fare.

### Input Format

A single integer `D`.

### Output Format

Print the fare.

### Test Case 1

```text

Input

4

Output

200

```

### Test Case 2

```text

Input

12

Output

530

```

### Test Case 3

```text

Input

20

Output

770

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    d = int(tokens[0])
    fare = 0
    if d <= 5:
        fare = d * 50
    elif d <= 15:
        fare = 5 * 50 + (d - 5) * 40
    else:
        fare = 5 * 50 + 10 * 40 + (d - 15) * 30
    print(fare)
```

#### ⚡ C++ / Java Core Logic
```cpp
int d; cin >> d;
int fare = 0;
if (d <= 5) fare = d * 50;
else if (d <= 15) fare = 250 + (d - 5) * 40;
else fare = 250 + 400 + (d - 15) * 30;
cout << fare << endl;
```

---

### Q12. Festival Bonus
* **Pattern**: `Experience-Based Percentage Bonus` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=salary)

### Problem Statement

Bonus is based on experience:

* > = 5 years → 20% salary

* 2–4 years → 10%

* < 2 years → 5%

Find the total bonus.

### Input Format

```text

N

salary experience

salary experience

...

```

### Output Format

Print total bonus with 2 decimal places.

### Test Case 1

```text

Input

3

30000 1

40000 3

50000 6

Output

14500.00

```

### Test Case 2

```text

Input

2

20000 5

30000 1

Output

5500.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    idx = 1
    total_bonus = 0.0
    for _ in range(n):
        salary = float(tokens[idx])
        exp = int(tokens[idx+1])
        idx += 2
        pct = 0.20 if exp >= 5 else (0.10 if exp >= 2 else 0.05)
        total_bonus += salary * pct
    print(f"{total_bonus:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double totalBonus = 0;
for (int i = 0; i < n; i++) {
    double salary; int exp;
    cin >> salary >> exp;
    double pct = (exp >= 5) ? 0.20 : (exp >= 2 ? 0.10 : 0.05);
    totalBonus += salary * pct;
}
cout << fixed << setprecision(2) << totalBonus << endl;
```

---

### Q13. Scholarship
* **Pattern**: `Tiered Fee Scholarship` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

Scholarship:

* Marks >= 90 → 100% fee

* Marks 75–89 → 50% fee

* Below 75 → no scholarship

Find the total scholarship amount.

### Input Format

```text

N

marks fee

marks fee

...

```

### Output Format

Print the total scholarship.

### Test Case 1

```text

Input

4

95 50000

80 40000

70 30000

90 60000

Output

130000

```

### Test Case 2

```text

Input

2

85 20000

92 30000

Output

40000

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    idx = 1
    total = 0
    for _ in range(n):
        marks = int(tokens[idx])
        fee = int(tokens[idx+1])
        idx += 2
        if marks >= 90: total += fee
        elif marks >= 75: total += fee // 2
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    int marks; long long fee;
    cin >> marks >> fee;
    if (marks >= 90) total += fee;
    else if (marks >= 75) total += fee / 2;
}
cout << total << endl;
```

---

### Q14. Target Incentive
* **Pattern**: `Sales Target Achievement Commission` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=sales)

### Problem Statement

If sales are greater than or equal to the target, the salesperson gets 10% of sales as incentive.

Otherwise, incentive is zero.

### Input Format

```text

N

sales target

sales target

...

```

### Output Format

Print total incentive with 2 decimal places.

### Test Case 1

```text

Input

4

10000 9000

8000 10000

15000 15000

5000 4000

Output

3000.00

```

### Test Case 2

```text

Input

2

20000 20000

5000 6000

Output

2000.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    idx = 1
    total = 0.0
    for _ in range(n):
        sales = float(tokens[idx])
        target = float(tokens[idx+1])
        idx += 2
        if sales >= target:
            total += sales * 0.10
    print(f"{total:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double total = 0;
for (int i = 0; i < n; i++) {
    double sales, target;
    cin >> sales >> target;
    if (sales >= target) total += sales * 0.10;
}
cout << fixed << setprecision(2) << total << endl;
```

---

### Q15. Mobile Bill
* **Pattern**: `Graduated Slab Billing` | **Time**: `O(1)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=math)

### Problem Statement

Calculate the bill:

* First 100 units → 1/unit

* Next 200 units → 0.80/unit

* Above 300 → 0.50/unit

### Input Format

A single integer `N`.

### Output Format

Print the bill with 2 decimal places.

### Test Case 1

```text

Input

80

Output

80.00

```

### Test Case 2

```text

Input

250

Output

220.00

```

### Test Case 3

```text

Input

400

Output

295.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    u = int(tokens[0])
    bill = 0.0
    if u <= 100:
        bill = u * 1.00
    elif u <= 300:
        bill = 100 * 1.00 + (u - 100) * 0.80
    else:
        bill = 100 * 1.00 + 200 * 0.80 + (u - 300) * 0.50
    print(f"{bill:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
int u; cin >> u;
double bill = 0;
if (u <= 100) bill = u * 1.00;
else if (u <= 300) bill = 100.0 + (u - 100) * 0.80;
else bill = 100.0 + 160.0 + (u - 300) * 0.50;
cout << fixed << setprecision(2) << bill << endl;
```

---


---

## ⚙️ SECTION B — MORE ARRAY SCENARIOS (Q16–Q32)

Threshold adjustments, conditional transformations, negative marking, index parity rules & multiple divisibility criteria.

---

### Q16. Gym Discount
* **Pattern**: `Attendance Threshold Discount` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

Monthly gym fee is 1000.

If attendance is at least 20 days, give 20% discount.

### Input Format

```text

N

attendance1 attendance2 ... attendanceN

```

### Output Format

Print the total amount collected.

### Test Case

```text

Input

4

22 18 20 15

Output

3800.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    days = [int(x) for x in tokens[1:n+1]]
    total = sum(800.0 if d >= 20 else 1000.0 for d in days)
    print(f"{total:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double total = 0;
for (int d : days) total += (d >= 20 ? 800.0 : 1000.0);
cout << fixed << setprecision(2) << total << endl;
```

---

### Q17. Adjusted Salary Average
* **Pattern**: `Trimmed Mean (Remove Min & Max)` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 1491 — Average Salary Excluding Min and Max](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

### Problem Statement

Given employee salaries, remove the minimum and maximum salary and calculate the average of the remaining salaries.

### Input Format

```text

N

salary1 salary2 ... salaryN

```

### Output Format

Print the average with 2 decimal places.

### Test Case 1

```text

Input

5

10000 20000 30000 40000 50000

Output

30000.00

```

### Test Case 2

```text

Input

4

10 20 30 40

Output

25.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    salaries = [float(x) for x in tokens[1:n+1]]
    mn, mx, tot = min(salaries), max(salaries), sum(salaries)
    avg = (tot - mn - mx) / (n - 2)
    print(f"{avg:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double mn = salaries[0], mx = salaries[0], sum = 0;
for (double s : salaries) {
    mn = min(mn, s);
    mx = max(mx, s);
    sum += s;
}
double avg = (sum - mn - mx) / (n - 2);
cout << fixed << setprecision(2) << avg << endl;
```

---

### Q18. Second Item Discount
* **Pattern**: `Pairwise Alternate Discount` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=discount)

### Problem Statement

For every pair of products, the second item gets 50% discount.

For example, prices `100 200` result in payment `100 + 100`.

### Input Format

```text

N

price1 price2 ... priceN

```

### Output Format

Print the final amount.

### Test Case

```text

Input

4

100 200 300 400

Output

400

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    prices = [int(x) for x in tokens[1:n+1]]
    total = sum(prices[i] if i % 2 == 0 else prices[i] // 2 for i in range(n))
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    total += (i % 2 == 0) ? prices[i] : prices[i] / 2;
}
cout << total << endl;
```

---

### Q19. Loyalty Points
* **Pattern**: `Loyalty Points with Threshold Bonus` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=points)

### Problem Statement

Customers receive 1 loyalty point for every ₹100 spent.

If total spending is greater than ₹5000, add 5 extra points.

### Input Format

```text

N

spending1 spending2 ... spendingN

```

### Output Format

Print total loyalty points.

### Test Case

```text

Input

3

500 1200 6000

Output

82

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    spending = [int(x) for x in tokens[1:n+1]]
    pts = sum(s // 100 for s in spending)
    tot_spent = sum(spending)
    if tot_spent > 5000:
        pts += 5
    print(pts)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long pts = 0, tot = 0;
for (int s : spending) {
    pts += s / 100;
    tot += s;
}
if (tot > 5000) pts += 5;
cout << pts << endl;
```

---

### Q20. Bus Fare
* **Pattern**: `Character Mapping Sum` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 13 — Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

### Problem Statement

Fare:

* Adult → 100

* Child → 50

* Senior → 70

Given passenger types, calculate total fare.

### Input Format

```text

N

type1 type2 ... typeN

```

Use `A`, `C`, and `S`.

### Output Format

Print total fare.

### Test Case

```text

Input

5

A C S A C

Output

370

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    fares = {'A': 100, 'C': 50, 'S': 70}
    total = sum(fares.get(tokens[i], 0) for i in range(1, n+1))
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    char c; cin >> c;
    if (c == 'A') total += 100;
    else if (c == 'C') total += 50;
    else if (c == 'S') total += 70;
}
cout << total << endl;
```

---

### Q21. Attendance Bonus
* **Pattern**: `Condition Counter & Flat Bonus` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=bonus)

### Problem Statement

Employees with attendance >= 90 receive a bonus of 2000.

Find the total bonus.

### Input Format

```text

N

attendance1 attendance2 ... attendanceN

```

### Output Format

Print total bonus.

### Test Case

```text

Input

5

95 80 90 70 100

Output

6000

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    att = [int(x) for x in tokens[1:n+1]]
    total = sum(2000 for a in att if a >= 90)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
int count = 0;
for (int a : att) if (a >= 90) count++;
cout << (count * 2000) << endl;
```

---

### Q22. Restaurant Service Charge
* **Pattern**: `Restaurant Service Surcharge` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=bill)

### Problem Statement

For each bill:

* Bill > 1000 → 10% service charge

* Bill > 500 and <= 1000 → 5%

* Otherwise → no charge

Find the total service charge.

### Input Format

```text

N

bill1 bill2 ... billN

```

### Output Format

Print service charge with 2 decimal places.

### Test Case

```text

Input

3

500 800 1500

Output

190.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    bills = [float(x) for x in tokens[1:n+1]]
    charge = sum(b * 0.10 if b > 1000 else (b * 0.05 if b > 500 else 0.0) for b in bills)
    print(f"{charge:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double charge = 0;
for (double b : bills) {
    if (b > 1000) charge += b * 0.10;
    else if (b > 500) charge += b * 0.05;
}
cout << fixed << setprecision(2) << charge << endl;
```

---

### Q23. Filtered Average
* **Pattern**: `Filtered Mean / Exclude Outliers` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=average)

### Problem Statement

Ignore all ratings equal to `1` and calculate the average of the remaining ratings.

### Input Format

```text

N

rating1 rating2 ... ratingN

```

### Output Format

Print the average with 2 decimal places.

### Test Case

```text

Input

5

1 4 5 1 3

Output

4.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    ratings = [float(x) for x in tokens[1:n+1]]
    valid = [r for r in ratings if r != 1]
    avg = sum(valid) / len(valid) if valid else 0.0
    print(f"{avg:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double sum = 0; int cnt = 0;
for (double r : ratings) {
    if (r != 1) { sum += r; cnt++; }
}
cout << fixed << setprecision(2) << (cnt ? sum / cnt : 0.0) << endl;
```

---

### Q24. Cashback
* **Pattern**: `Tiered Percentage Cashback` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=cashback)

### Problem Statement

Cashback:

* Purchase >= 1000 → 5%

* Purchase 500–999 → 2%

* Below 500 → 0%

Find total cashback.

### Input Format

```text

N

purchase1 purchase2 ... purchaseN

```

### Output Format

Print cashback with 2 decimal places.

### Test Case

```text

Input

3

1000 700 300

Output

64.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    purchases = [float(x) for x in tokens[1:n+1]]
    cb = sum(p * 0.05 if p >= 1000 else (p * 0.02 if p >= 500 else 0.0) for p in purchases)
    print(f"{cb:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double cb = 0;
for (double p : purchases) {
    if (p >= 1000) cb += p * 0.05;
    else if (p >= 500) cb += p * 0.02;
}
cout << fixed << setprecision(2) << cb << endl;
```

---

### Q25. Minimum Guaranteed Salary
* **Pattern**: `Minimum Floor Value Adjustment` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

If salary is less than 15000, replace it with 15000.

Find total salary after adjustment.

### Input Format

```text

N

salary1 salary2 ... salaryN

```

### Output Format

Print total salary.

### Test Case

```text

Input

4

10000 15000 20000 12000

Output

62000

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    salaries = [int(x) for x in tokens[1:n+1]]
    total = sum(max(s, 15000) for s in salaries)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int s : salaries) total += max(s, 15000);
cout << total << endl;
```

---

### Q26. Negative Marking
* **Pattern**: `Exam Negative Marking System` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

For each answer:

* `C` → +4

* `W` → -1

* `U` → 0

Find the final score.

### Input Format

A string containing `C`, `W`, and `U`.

### Output Format

Print the score.

### Test Case 1

```text

Input

CCWUW

Output

6

```

### Test Case 2

```text

Input

CCCC

Output

16

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    score = sum(4 if c == 'C' else (-1 if c == 'W' else 0) for c in s)
    print(score)
```

#### ⚡ C++ / Java Core Logic
```cpp
int score = 0;
for (char c : s) {
    if (c == 'C') score += 4;
    else if (c == 'W') score -= 1;
}
cout << score << endl;
```

---

### Q27. Project Bonus
* **Pattern**: `Project Sized Tiered Bonus` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=bonus)

### Problem Statement

Bonus per project:

* Projects <= 3 → 5000/project

* Projects > 3 → 7000/project

Find the total bonus.

### Input Format

```text

N

projects1 projects2 ... projectsN

```

### Output Format

Print total bonus.

### Test Case

```text

Input

3

2 4 3

Output

29000

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    projects = [int(x) for x in tokens[1:n+1]]
    total = sum(p * 5000 if p <= 3 else p * 7000 for p in projects)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int p : projects) {
    total += (p <= 3 ? p * 5000LL : p * 7000LL);
}
cout << total << endl;
```

---

### Q28. Index Transformation
* **Pattern**: `Alternating Index Parity Transformation` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

For every array element:

* Even index → add 5

* Odd index → subtract 3

Print the resulting array.

### Input Format

```text

N

array elements

```

### Output Format

Print transformed array.

### Test Case

```text

Input

5

10 20 30 40 50

Output

15 17 35 37 55

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    res = [arr[i] + 5 if i % 2 == 0 else arr[i] - 3 for i in range(n)]
    print(*(res))
```

#### ⚡ C++ / Java Core Logic
```cpp
for (int i = 0; i < n; i++) {
    cout << (i % 2 == 0 ? arr[i] + 5 : arr[i] - 3) << " ";
}
cout << endl;
```

---

### Q29. Divisibility Transformation
* **Pattern**: `Divisibility Branching Sum` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=divisible)

### Problem Statement

For every number:

* Divisible by 5 → multiply by 2

* Otherwise → subtract 1

Find the sum of transformed values.

### Input Format

```text

N

array

```

### Output Format

Print the sum.

### Test Case

```text

Input

5

5 7 10 12 15

Output

49

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    total = sum(x * 2 if x % 5 == 0 else x - 1 for x in arr)
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int x : arr) {
    total += (x % 5 == 0 ? x * 2 : x - 1);
}
cout << total << endl;
```

---

### Q30. Threshold Transformation
* **Pattern**: `Threshold Scaled Sum` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=threshold)

### Problem Statement

For every number:

* If number > K → decrease it by 10%

* Otherwise → increase it by 5%

Find the final sum.

### Input Format

```text

N K

array

```

### Output Format

Print the final sum with 2 decimal places.

### Test Case

```text

Input

4 50

40 60 50 100

Output

235.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    k = float(tokens[1])
    arr = [float(x) for x in tokens[2:n+2]]
    total = sum(x * 0.90 if x > k else x * 1.05 for x in arr)
    print(f"{total:.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
double total = 0;
for (double x : arr) {
    total += (x > k ? x * 0.90 : x * 1.05);
}
cout << fixed << setprecision(2) << total << endl;
```

---

### Q31. Index-Based Addition
* **Pattern**: `Value Parity Index Transformation` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=array)

### Problem Statement

For every array element:

* If the number is even, add its index.

* If the number is odd, subtract its index.

Print the transformed array.

### Input Format

```text

N

array

```

### Output Format

Print transformed array.

### Test Case

```text

Input

5

10 11 12 13 14

Output

10 10 14 10 18

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    res = [arr[i] + i if arr[i] % 2 == 0 else arr[i] - i for i in range(n)]
    print(*(res))
```

#### ⚡ C++ / Java Core Logic
```cpp
for (int i = 0; i < n; i++) {
    cout << (arr[i] % 2 == 0 ? arr[i] + i : arr[i] - i) << " ";
}
cout << endl;
```

---

### Q32. Multiple Divisibility Rules
* **Pattern**: `Compound Divisibility Operations` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=divisible)

### Problem Statement

For each number at index `i`:

* If divisible by 3, add `i`.

* If divisible by 7, subtract `i`.

* If divisible by both, apply both operations.

Find the final sum.

### Input Format

```text

N

array

```

### Output Format

Print final sum.

### Test Case

```text

Input

4

3 7 21 10

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    total = 0
    for i in range(n):
        val = 0
        if arr[i] % 3 == 0: val += i
        if arr[i] % 7 == 0: val -= i
        total += val
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    if (arr[i] % 3 == 0) total += i;
    if (arr[i] % 7 == 0) total -= i;
}
cout << total << endl;
```

---


---

## 🧩 SECTION C — ARRAY PATTERNS (Q33–Q50)

Core DSA array patterns: frequencies, duplicate detection, Two Sum, Kadane's algorithm, sliding window, prefix sums & missing number.

---

### Q33. Frequency of Elements
* **Pattern**: `Frequency Counting with Order Preservation` | **Time**: `O(N)` | **Space**: `O(U)`
* **LeetCode Equivalent**: [LC 387 — First Unique Character](https://leetcode.com/problems/first-unique-character-in-a-string/)

### Problem Statement

Given an array, print the frequency of every distinct element.

### Input Format

```text

N

array

```

### Output Format

Print each element and its frequency in order of first occurrence.

### Test Case

```text

Input

7

2 3 2 4 3 2 5

Output

2 3

3 2

4 1

5 1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    from collections import OrderedDict
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    freq = OrderedDict()
    for x in arr:
        freq[x] = freq.get(x, 0) + 1
    for k, v in freq.items():
        print(f"{k} {v}")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<int, int> freq;
vector<int> order;
for (int x : arr) {
    if (freq[x] == 0) order.push_back(x);
    freq[x]++;
}
for (int x : order) cout << x << " " << freq[x] << endl;
```

---

### Q34. Find Duplicates
* **Pattern**: `Duplicate Elements Ordered Extraction` | **Time**: `O(N)` | **Space**: `O(U)`
* **LeetCode Equivalent**: [LC 442 — Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

### Problem Statement

Find all elements that occur more than once.

### Input Format

```text

N

array

```

### Output Format

Print duplicate elements in order of first occurrence.

### Test Case

```text

Input

8

1 2 3 2 4 1 5 3

Output

2 1 3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    counts = {}
    for x in arr: counts[x] = counts.get(x, 0) + 1
    seen = set()
    dups = []
    for x in arr:
        if counts[x] > 1 and x not in seen:
            seen.add(x)
            dups.append(x)
    print(*(dups))
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<int, int> counts;
for (int x : arr) counts[x]++;
unordered_set<int> seen;
for (int x : arr) {
    if (counts[x] > 1 && !seen.count(x)) {
        cout << x << " ";
        seen.insert(x);
    }
}
cout << endl;
```

---

### Q35. Remove Duplicates
* **Pattern**: `Deduplication Preserving First Appearance` | **Time**: `O(N)` | **Space**: `O(U)`
* **LeetCode Equivalent**: [LC 26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

### Problem Statement

Remove duplicate elements while preserving the first occurrence.

### Input Format

```text

N

array

```

### Output Format

Print the resulting array.

### Test Case

```text

Input

7

1 2 2 3 1 4 3

Output

1 2 3 4

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    seen = set()
    res = []
    for x in arr:
        if x not in seen:
            seen.add(x)
            res.append(x)
    print(*(res))
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_set<int> seen;
for (int x : arr) {
    if (!seen.count(x)) {
        cout << x << " ";
        seen.insert(x);
    }
}
cout << endl;
```

---

### Q36. First Repeating Element
* **Pattern**: `First Element with Count > 1` | **Time**: `O(N)` | **Space**: `O(U)`
* **LeetCode Equivalent**: [Accenture Classic — First Repeating Element](https://leetcode.com/problems/contains-duplicate/)

### Problem Statement

Find the first element that appears more than once.

### Input Format

```text

N

array

```

### Output Format

Print the first repeating element. If none exists, print `-1`.

### Test Case 1

```text

Input

6

10 5 3 4 3 5

Output

5

```

### Test Case 2

```text

Input

4

1 2 3 4

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    counts = {}
    for x in arr: counts[x] = counts.get(x, 0) + 1
    for x in arr:
        if counts[x] > 1:
            print(x)
            return
    print("-1")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<int, int> counts;
for (int x : arr) counts[x]++;
for (int x : arr) {
    if (counts[x] > 1) {
        cout << x << endl;
        return 0;
    }
}
cout << -1 << endl;
```

---

### Q37. First Non-Repeating Element
* **Pattern**: `First Unique Element` | **Time**: `O(N)` | **Space**: `O(U)`
* **LeetCode Equivalent**: [LC 387 — First Unique Character](https://leetcode.com/problems/first-unique-character-in-a-string/)

### Problem Statement

Find the first element whose frequency is exactly one.

### Input Format

```text

N

array

```

### Output Format

Print the first non-repeating element or `-1`.

### Test Case

```text

Input

7

4 5 1 2 1 4 5

Output

2

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    counts = {}
    for x in arr: counts[x] = counts.get(x, 0) + 1
    for x in arr:
        if counts[x] == 1:
            print(x)
            return
    print("-1")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<int, int> counts;
for (int x : arr) counts[x]++;
for (int x : arr) {
    if (counts[x] == 1) {
        cout << x << endl;
        return 0;
    }
}
cout << -1 << endl;
```

---

### Q38. Second Largest
* **Pattern**: `Second Largest Distinct in Single Pass` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 414 — Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)

### Problem Statement

Find the second-largest **distinct** element without sorting.

### Input Format

```text

N

array

```

### Output Format

Print the second-largest distinct value. If it does not exist, print `-1`.

### Test Case 1

```text

Input

6

10 5 20 20 8 15

Output

15

```

### Test Case 2

```text

Input

3

5 5 5

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    first = second = -float('inf')
    for x in arr:
        if x > first:
            second = first
            first = x
        elif first > x > second:
            second = x
    print(second if second != -float('inf') else -1)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long first = LLONG_MIN, second = LLONG_MIN;
for (int x : arr) {
    if (x > first) {
        second = first;
        first = x;
    } else if (x < first && x > second) {
        second = x;
    }
}
cout << (second == LLONG_MIN ? -1 : second) << endl;
```

---

### Q39. Second Smallest
* **Pattern**: `Second Smallest Distinct in Single Pass` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problems/third-maximum-number/)

### Problem Statement

Find the second-smallest distinct element without sorting.

### Input Format

```text

N

array

```

### Output Format

Print the second-smallest distinct value.

### Test Case

```text

Input

6

10 5 20 5 8 15

Output

8

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    first = second = float('inf')
    for x in arr:
        if x < first:
            second = first
            first = x
        elif first < x < second:
            second = x
    print(second if second != float('inf') else -1)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long first = LLONG_MAX, second = LLONG_MAX;
for (int x : arr) {
    if (x < first) {
        second = first;
        first = x;
    } else if (x > first && x < second) {
        second = x;
    }
}
cout << (second == LLONG_MAX ? -1 : second) << endl;
```

---

### Q40. Two Sum
* **Pattern**: `Two Sum (Hash Set Lookup)` | **Time**: `O(N)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 1 — Two Sum](https://leetcode.com/problems/two-sum/)

### Problem Statement

Given an array and target `K`, determine whether two different elements have sum `K`.

### Input Format

```text

N K

array

```

### Output Format

Print `YES` if a pair exists, otherwise `NO`.

### Test Case 1

```text

Input

5 9

2 7 11 15 3

Output

YES

```

### Test Case 2

```text

Input

4 20

1 5 7 10

Output

NO

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    k = int(tokens[1])
    arr = [int(x) for x in tokens[2:n+2]]
    seen = set()
    for x in arr:
        if (k - x) in seen:
            print("YES")
            return
        seen.add(x)
    print("NO")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_set<int> seen;
bool found = false;
for (int x : arr) {
    if (seen.count(k - x)) { found = true; break; }
    seen.insert(x);
}
cout << (found ? "YES" : "NO") << endl;
```

---

### Q41. Two Sum Indices
* **Pattern**: `Two Sum 0-based Indices` | **Time**: `O(N)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 1 — Two Sum](https://leetcode.com/problems/two-sum/)

### Problem Statement

Find the indices of two different elements whose sum equals `K`.

### Input Format

```text

N K

array

```

### Output Format

Print the two indices. If no pair exists, print `-1`.

### Test Case

```text

Input

5 9

2 7 11 15 3

Output

0 1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    k = int(tokens[1])
    arr = [int(x) for x in tokens[2:n+2]]
    pos = {}
    for i, x in enumerate(arr):
        comp = k - x
        if comp in pos:
            print(f"{pos[comp]} {i}")
            return
        pos[x] = i
    print("-1 -1")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<int, int> pos;
for (int i = 0; i < n; i++) {
    int comp = k - arr[i];
    if (pos.count(comp)) {
        cout << pos[comp] << " " << i << endl;
        return 0;
    }
    pos[arr[i]] = i;
}
cout << "-1 -1" << endl;
```

---

### Q42. Move Zeros
* **Pattern**: `Two-Pointer Zero Shifting` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 283 — Move Zeroes](https://leetcode.com/problems/move-zeroes/)

### Problem Statement

Move all zero elements to the end while maintaining the relative order of non-zero elements.

### Input Format

```text

N

array

```

### Output Format

Print the resulting array.

### Test Case

```text

Input

7

0 1 0 3 12 0 5

Output

1 3 12 5 0 0 0

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    non_zeros = [x for x in arr if x != 0]
    res = non_zeros + [0] * (n - len(non_zeros))
    print(*(res))
```

#### ⚡ C++ / Java Core Logic
```cpp
int insertPos = 0;
for (int i = 0; i < n; i++) {
    if (arr[i] != 0) arr[insertPos++] = arr[i];
}
while (insertPos < n) arr[insertPos++] = 0;
for (int x : arr) cout << x << " ";
cout << endl;
```

---

### Q43. Separate Positive and Negative
* **Pattern**: `Stable Partition Negatives & Positives` | **Time**: `O(N)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 2161 — Partition Array Given Pivot](https://leetcode.com/problems/partition-array-according-to-given-pivot/)

### Problem Statement

Move negative numbers to one side and positive numbers to the other side.

For this problem, preserve the relative order.

### Input Format

```text

N

array

```

### Output Format

Print the rearranged array.

### Test Case

```text

Input

6

2 -1 4 -3 -5 6

Output

-1 -3 -5 2 4 6

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    negs = [x for x in arr if x < 0]
    pos = [x for x in arr if x >= 0]
    print(*(negs + pos))
```

#### ⚡ C++ / Java Core Logic
```cpp
vector<int> neg, pos;
for (int x : arr) {
    if (x < 0) neg.push_back(x);
    else pos.push_back(x);
}
for (int x : neg) cout << x << " ";
for (int x : pos) cout << x << " ";
cout << endl;
```

---

### Q44. Prefix Sum
* **Pattern**: `Running Prefix Sum Accumulation` | **Time**: `O(N)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 1480 — Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

### Problem Statement

Create a prefix-sum array.

For each index `i`, the value is the sum of elements from index `0` to `i`.

### Input Format

```text

N

array

```

### Output Format

Print the prefix-sum array.

### Test Case

```text

Input

5

2 4 1 3 5

Output

2 6 7 10 15

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    cur = 0
    pref = []
    for x in arr:
        cur += x
        pref.append(cur)
    print(*(pref))
```

#### ⚡ C++ / Java Core Logic
```cpp
long long cur = 0;
for (int i = 0; i < n; i++) {
    cur += arr[i];
    cout << cur << " ";
}
cout << endl;
```

---

### Q45. Range Sum Queries
* **Pattern**: `Constant Time Range Sum Queries O(1)` | **Time**: `O(N + Q)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 303 — Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

### Problem Statement

Given an array and `Q` queries, each query contains `L` and `R`.

Find the sum of elements from index `L` to `R`, inclusive.

### Input Format

```text

N

array

Q

L R

L R

...

```

### Output Format

Print one answer for each query.

### Test Case

```text

Input

5

2 4 1 3 5

3

0 2

1 3

2 4

Output

7

8

9

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    pref = [0] * (n + 1)
    for i in range(n):
        pref[i+1] = pref[i] + arr[i]
    q = int(tokens[n+1])
    idx = n + 2
    for _ in range(q):
        l = int(tokens[idx])
        r = int(tokens[idx+1])
        idx += 2
        print(pref[r+1] - pref[l])
```

#### ⚡ C++ / Java Core Logic
```cpp
vector<long long> pref(n + 1, 0);
for (int i = 0; i < n; i++) pref[i+1] = pref[i] + arr[i];
while (q--) {
    int l, r; cin >> l >> r;
    cout << (pref[r+1] - pref[l]) << endl;
}
```

---

### Q46. Maximum Subarray Sum
* **Pattern**: `Kadane's Algorithm` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 53 — Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

### Problem Statement

Find the maximum sum of a contiguous subarray.

### Input Format

```text

N

array

```

### Output Format

Print the maximum subarray sum.

### Test Case 1

```text

Input

9

-2 1 -3 4 -1 2 1 -5 4

Output

6

```

### Test Case 2

```text

Input

4

-5 -2 -8 -1

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    max_so_far = arr[0]
    curr_max = arr[0]
    for x in arr[1:]:
        curr_max = max(x, curr_max + x)
        max_so_far = max(max_so_far, curr_max)
    print(max_so_far)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long maxSoFar = arr[0], cur = arr[0];
for (int i = 1; i < n; i++) {
    cur = max((long long)arr[i], cur + arr[i]);
    maxSoFar = max(maxSoFar, cur);
}
cout << maxSoFar << endl;
```

---

### Q47. Longest Subarray With Sum K
* **Pattern**: `Longest Subarray with Sum K (Prefix Map)` | **Time**: `O(N)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 560 — Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

### Problem Statement

Given an array of positive integers and a target `K`, find the length of the longest contiguous subarray whose sum is exactly `K`.

### Input Format

```text

N K

array

```

### Output Format

Print the maximum length. If no subarray exists, print `0`.

### Test Case 1

```text

Input

6 7

1 2 3 1 1 1

Output

4

```

### Test Case 2

```text

Input

5 5

1 1 1 1 1

Output

5

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    k = int(tokens[1])
    arr = [int(x) for x in tokens[2:n+2]]
    pref_map = {0: -1}
    cur_sum = 0
    max_len = 0
    for i, x in enumerate(arr):
        cur_sum += x
        if (cur_sum - k) in pref_map:
            max_len = max(max_len, i - pref_map[cur_sum - k])
        if cur_sum not in pref_map:
            pref_map[cur_sum] = i
    print(max_len)
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<long long, int> pref;
pref[0] = -1;
long long cur = 0; int maxLen = 0;
for (int i = 0; i < n; i++) {
    cur += arr[i];
    if (pref.count(cur - k)) maxLen = max(maxLen, i - pref[cur - k]);
    if (!pref.count(cur)) pref[cur] = i;
}
cout << maxLen << endl;
```

---

### Q48. Maximum Sum Window
* **Pattern**: `Fixed-Length Sliding Window Maximum Sum` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 643 — Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

### Problem Statement

Given an array and window size `K`, find the maximum sum of any contiguous subarray of size `K`.

### Input Format

```text

N K

array

```

### Output Format

Print the maximum window sum.

### Test Case

```text

Input

6 3

2 1 5 1 3 2

Output

9

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    k = int(tokens[1])
    arr = [int(x) for x in tokens[2:n+2]]
    w_sum = sum(arr[:k])
    max_sum = w_sum
    for i in range(k, n):
        w_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, w_sum)
    print(max_sum)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long wSum = 0;
for (int i = 0; i < k; i++) wSum += arr[i];
long long maxSum = wSum;
for (int i = k; i < n; i++) {
    wSum += arr[i] - arr[i - k];
    maxSum = max(maxSum, wSum);
}
cout << maxSum << endl;
```

---

### Q49. Minimum Pair Difference
* **Pattern**: `Sorting + Adjacent Scan (Min Pair Difference)` | **Time**: `O(N log N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 1200 — Minimum Absolute Difference](https://leetcode.com/problems/minimum-absolute-difference/)

### Problem Statement

Given an array, find the minimum absolute difference between any two elements.

### Input Format

```text

N

array

```

### Output Format

Print the minimum difference.

### Test Case

```text

Input

5

10 3 20 8 15

Output

2

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    arr.sort()
    min_diff = min(arr[i+1] - arr[i] for i in range(n-1))
    print(min_diff)
```

#### ⚡ C++ / Java Core Logic
```cpp
sort(arr.begin(), arr.end());
int minDiff = INT_MAX;
for (int i = 0; i < n - 1; i++) {
    minDiff = min(minDiff, arr[i+1] - arr[i]);
}
cout << minDiff << endl;
```

---

### Q50. Missing Number
* **Pattern**: `Sum Formula / Missing Element` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 268 — Missing Number](https://leetcode.com/problems/missing-number/)

### Problem Statement

The array contains `N-1` distinct numbers from `1` to `N`. Find the missing number.

### Input Format

```text

N

N-1 numbers

```

### Output Format

Print the missing number.

### Test Case 1

```text

Input

5

1 2 4 5

Output

3

```

### Test Case 2

```text

Input

6

1 2 3 5 6

Output

4

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n]]
    expected = n * (n + 1) // 2
    actual = sum(arr)
    print(expected - actual)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long expected = 1LL * n * (n + 1) / 2;
long long actual = 0;
for (int i = 0; i < n - 1; i++) actual += arr[i];
cout << (expected - actual) << endl;
```

---


---

## 🔤 SECTION D — STRING / PARSING (Q51–Q70)

String parsing, number token extraction, command decoding, identifier validation, character counts, anagrams & longest word.

---

### Q51. Extract Numbers and Sum
* **Pattern**: `Regex Contiguous Number Extraction & Sum` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 2042 — Check if Numbers Are Ascending](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/)

### Problem Statement

Given a string containing letters and digits, extract all numbers and calculate their sum.

### Input Format

A single string.

### Output Format

Print the sum of extracted numbers.

### Test Case

```text

Input

A10B20C30

Output

60

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read()
    nums = [int(x) for x in re.findall(r'\d+', s)]
    print(sum(nums))
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0, cur = 0; bool inNum = false;
for (char c : s) {
    if (isdigit(c)) { cur = cur * 10 + (c - '0'); inNum = true; }
    else if (inNum) { total += cur; cur = 0; inNum = false; }
}
if (inNum) total += cur;
cout << total << endl;
```

---

### Q52. Count Numbers in String
* **Pattern**: `Tokenizing / Counting Numeric Sequences` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

Given a string containing letters and numbers, count how many numeric values appear.

### Input Format

A single string.

### Output Format

Print the count.

### Test Case

```text

Input

A10B20C30

Output

3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read()
    nums = re.findall(r'\d+', s)
    print(len(nums))
```

#### ⚡ C++ / Java Core Logic
```cpp
int count = 0; bool inNum = false;
for (char c : s) {
    if (isdigit(c)) { if (!inNum) { count++; inNum = true; } }
    else inNum = false;
}
cout << count << endl;
```

---

### Q53. Maximum Number in String
* **Pattern**: `Embedded Number Extraction & Max Tracking` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

Extract all numbers from the string and print the largest number.

### Input Format

A single string.

### Output Format

Print the maximum number.

### Test Case

```text

Input

A10B250C30D75

Output

250

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read()
    nums = [int(x) for x in re.findall(r'\d+', s)]
    print(max(nums) if nums else 0)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long maxVal = -1, cur = 0; bool inNum = false;
for (char c : s) {
    if (isdigit(c)) { cur = cur * 10 + (c - '0'); inNum = true; }
    else if (inNum) { maxVal = max(maxVal, cur); cur = 0; inNum = false; }
}
if (inNum) maxVal = max(maxVal, cur);
cout << maxVal << endl;
```

---

### Q54. Count Even Numbers in String
* **Pattern**: `Filter & Count Even Tokens` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

Extract all numbers from the string and count how many are even.

### Input Format

A single string.

### Output Format

Print the count of even numbers.

### Test Case

```text

Input

A10B25C30D41

Output

2

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read()
    nums = [int(x) for x in re.findall(r'\d+', s)]
    print(sum(1 for x in nums if x % 2 == 0))
```

#### ⚡ C++ / Java Core Logic
```cpp
int count = 0; long long cur = 0; bool inNum = false;
for (char c : s) {
    if (isdigit(c)) { cur = cur * 10 + (c - '0'); inNum = true; }
    else if (inNum) { if (cur % 2 == 0) count++; cur = 0; inNum = false; }
}
if (inNum && cur % 2 == 0) count++;
cout << count << endl;
```

---

### Q55. Code Processing
* **Pattern**: `String Instruction Decoder` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 1678 — Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation/)

### Problem Statement

A string contains operations:

* `P` followed by a number → add the number.

* `D` followed by a number → subtract the number.

Calculate the final value starting from zero.

### Input Format

A string such as:

`P10D5P20`

### Output Format

Print the final value.

### Test Case 1

```text

Input

P10D5P20

Output

25

```

### Test Case 2

```text

Input

P50D20D10

Output

20

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    val = 0
    for ch in s:
        if ch == 'A': val += 1
        elif ch == 'B': val -= 1
    print(val)
```

#### ⚡ C++ / Java Core Logic
```cpp
int val = 0;
for (char c : s) {
    if (c == 'A') val++;
    else if (c == 'B') val--;
}
cout << val << endl;
```

---

### Q56. Transaction String
* **Pattern**: `Compact Transaction String Parser` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

A transaction string contains:

* `D amount` → deposit

* `W amount` → withdrawal

Calculate the final balance.

### Input Format

First line:

```text

initialBalance

```

Second line:

```text

transactionString

```

### Output Format

Print the final balance.

### Test Case

```text

Input

1000

D500W200D100

Output

1400

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read().strip()
    matches = re.findall(r'([DW])(\d+)', s)
    bal = 0
    for op, amt in matches:
        amt = int(amt)
        if op == 'D': bal += amt
        elif op == 'W': bal -= amt
    print(bal)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long bal = 0; int i = 0, n = s.length();
while (i < n) {
    char type = s[i++];
    long long amt = 0;
    while (i < n && isdigit(s[i])) amt = amt * 10 + (s[i++] - '0');
    if (type == 'D') bal += amt;
    else if (type == 'W') bal -= amt;
}
cout << bal << endl;
```

---

### Q57. ID Filtering
* **Pattern**: `Identifier Verification & Filtering` | **Time**: `O(N * L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=validation)

### Problem Statement

Each ID begins with either `A` or `B`, followed by a number.

Count IDs whose numeric portion is greater than `100`.

### Input Format

```text

N

ID1 ID2 ... IDN

```

### Output Format

Print the count.

### Test Case

```text

Input

5

A120 B90 A150 B200 A50

Output

3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    ids = tokens[1:n+1]
    valid = [x for x in ids if len(x) >= 5 and x[:3].isalpha() and x[3:].isdigit()]
    print(*(valid))
```

#### ⚡ C++ / Java Core Logic
```cpp
for (int i = 0; i < n; i++) {
    string id; cin >> id;
    if (id.length() >= 5 && isalpha(id[0]) && isalpha(id[1]) && isalpha(id[2])) {
        bool numOk = true;
        for (size_t j = 3; j < id.length(); j++) if (!isdigit(id[j])) numOk = false;
        if (numOk) cout << id << " ";
    }
}
cout << endl;
```

---

### Q58. Username Validation
* **Pattern**: `String Predicate Validation` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 520 — Detect Capital](https://leetcode.com/problems/detect-capital/)

### Problem Statement

A username is valid if:

* Its length is at least 5.

* It contains the substring `"user"`.

Count the valid usernames.

### Input Format

```text

N

username1

username2

...

```

### Output Format

Print the count.

### Test Case

```text

Input

5

user

myuser

user123

admin

superuser

Output

3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    u = sys.stdin.read().strip()
    if (4 <= len(u) <= 15) and u[0].isalpha() and u.isalnum():
        print("VALID")
    else:
        print("INVALID")
```

#### ⚡ C++ / Java Core Logic
```cpp
bool ok = (s.length() >= 4 && s.length() <= 15 && isalpha(s[0]));
for (char c : s) if (!isalnum(c)) ok = false;
cout << (ok ? "VALID" : "INVALID") << endl;
```

---

### Q59. String Multipliers
* **Pattern**: `Run-Length String Expansion` | **Time**: `O(Total Chars)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 394 — Decode String](https://leetcode.com/problems/decode-string/)

### Problem Statement

For every character:

* `X` → multiply the current value by 2

* `Y` → multiply by 3

* `Z` → multiply by 5

Start with value `1`.

### Input Format

A string containing only `X`, `Y`, and `Z`.

### Output Format

Print the final value.

### Test Case

```text

Input

XYZ

Output

30

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read().strip()
    pairs = re.findall(r'([a-zA-Z])(\d+)', s)
    res = ''.join(ch * int(k) for ch, k in pairs)
    print(res)
```

#### ⚡ C++ / Java Core Logic
```cpp
int i = 0, n = s.length();
while (i < n) {
    char c = s[i++];
    int cnt = 0;
    while (i < n && isdigit(s[i])) cnt = cnt * 10 + (s[i++] - '0');
    while (cnt--) cout << c;
}
cout << endl;
```

---

### Q60. Status and Marks
* **Pattern**: `Key-Value Delimited Record Parsing` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=parsing)

### Problem Statement

Each student record contains status and marks.

* `PASS` → include marks

* `FAIL` → ignore marks

Find the total marks of passing students.

### Input Format

```text

N

status marks

status marks

...

```

### Output Format

Print total marks.

### Test Case

```text

Input

4

PASS 80

FAIL 90

PASS 70

FAIL 50

Output

150

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    idx = 1
    total = 0
    for _ in range(n):
        status = tokens[idx]
        marks = int(tokens[idx+1])
        idx += 2
        if status == 'PASS':
            total += marks
    print(total)
```

#### ⚡ C++ / Java Core Logic
```cpp
long long total = 0;
for (int i = 0; i < n; i++) {
    string status; int marks;
    cin >> status >> marks;
    if (status == "PASS") total += marks;
}
cout << total << endl;
```

---

### Q61. Price String Discount
* **Pattern**: `Price Substring Parsing & Discounting` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 2288 — Apply Discount to Prices](https://leetcode.com/problems/apply-discount-to-prices/)

### Problem Statement

Prices are provided as strings.

Convert each price to a number and apply:

* Price >= 1000 → 10% discount

* Otherwise → no discount

Find the final total.

### Input Format

```text

N

price strings

```

### Output Format

Print total with 2 decimal places.

### Test Case

```text

Input

3

500

1200

1500

Output

3050.00

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys, re
    s = sys.stdin.read()
    prices = [float(x) for x in re.findall(r'\$(\d+)', s)]
    discounted = [p * 0.90 for p in prices]
    print(f"{sum(discounted):.2f}")
```

#### ⚡ C++ / Java Core Logic
```cpp
// Extract prices starting with $ and sum with 10% discount
cout << fixed << setprecision(2) << total << endl;
```

---

### Q62. Time Filtering
* **Pattern**: `Time String Parser (HH:MM Conversion)` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 539 — Minimum Time Difference](https://leetcode.com/problems/minimum-time-difference/)

### Problem Statement

Given times in `HH:MM` format, count how many occur after 12:00 PM.

### Input Format

```text

N

time1 time2 ... timeN

```

### Output Format

Print the count.

### Test Case

```text

Input

5

09:30 12:30 14:00 11:45 18:20

Output

3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    times = tokens[1:n+1]
    count = 0
    for t in times:
        h, m = map(int, t.split(':'))
        if h * 60 + m >= 720:
            count += 1
    print(count)
```

#### ⚡ C++ / Java Core Logic
```cpp
int count = 0;
for (string t : times) {
    int h = stoi(t.substr(0, 2)), m = stoi(t.substr(3, 2));
    if (h * 60 + m >= 720) count++;
}
cout << count << endl;
```

---

### Q63. Country Code Filtering
* **Pattern**: `Prefix Phone/Country Code Matcher` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [Accenture Assessment Scenario](https://leetcode.com/problemset/all/?search=string)

### Problem Statement

Given country codes, count:

1. How many are `IN`.

2. How many are not `IN`.

### Input Format

```text

N

code1 code2 ... codeN

```

### Output Format

Print two integers:

`IN_count OTHER_count`

### Test Case

```text

Input

6

IN US IN UK IN AU

Output

3 3

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    code = tokens[0]
    n = int(tokens[1])
    numbers = tokens[2:n+2]
    matching = [x for x in numbers if x.startswith(code)]
    print(*(matching))
```

#### ⚡ C++ / Java Core Logic
```cpp
for (string num : numbers) {
    if (num.rfind(code, 0) == 0) cout << num << " ";
}
cout << endl;
```

---

### Q64. Character Frequency
* **Pattern**: `Character Frequency Preservation` | **Time**: `O(L)` | **Space**: `O(Alphabet)`
* **LeetCode Equivalent**: [LC 451 — Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)

### Problem Statement

Given a string, count the frequency of every character.

### Input Format

A single string.

### Output Format

Print each character and its frequency in order of first occurrence.

### Test Case

```text

Input

banana

Output

b 1

a 3

n 2

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    from collections import OrderedDict
    s = sys.stdin.read().strip()
    freq = OrderedDict()
    for c in s: freq[c] = freq.get(c, 0) + 1
    for k, v in freq.items():
        print(f"{k} {v}")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<char, int> freq;
vector<char> order;
for (char c : s) {
    if (freq[c] == 0) order.push_back(c);
    freq[c]++;
}
for (char c : order) cout << c << " " << freq[c] << endl;
```

---

### Q65. Most Frequent Character
* **Pattern**: `Mode Character with First-Occurrence Tiebreaker` | **Time**: `O(L)` | **Space**: `O(Alphabet)`
* **LeetCode Equivalent**: [Accenture Classic — Most Frequent Character](https://leetcode.com/problemset/all/?search=frequency)

### Problem Statement

Find the character that occurs most frequently.

If multiple characters have the same maximum frequency, return the character that appears first.

### Input Format

A string.

### Output Format

Print the character.

### Test Case

```text

Input

banana

Output

a

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    freq = {}
    for c in s: freq[c] = freq.get(c, 0) + 1
    max_c, max_count = s[0], freq[s[0]]
    for c in s:
        if freq[c] > max_count:
            max_count = freq[c]
            max_c = c
    print(max_c)
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<char, int> freq;
for (char c : s) freq[c]++;
char best = s[0]; int mx = freq[s[0]];
for (char c : s) {
    if (freq[c] > mx) { mx = freq[c]; best = c; }
}
cout << best << endl;
```

---

### Q66. First Non-Repeating Character
* **Pattern**: `First Non-Repeating Character` | **Time**: `O(L)` | **Space**: `O(Alphabet)`
* **LeetCode Equivalent**: [LC 387 — First Unique Character](https://leetcode.com/problems/first-unique-character-in-a-string/)

### Problem Statement

Find the first character that appears exactly once.

### Input Format

A string.

### Output Format

Print the character or `-1`.

### Test Case 1

```text

Input

swiss

Output

w

```

### Test Case 2

```text

Input

aabb

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    freq = {}
    for c in s: freq[c] = freq.get(c, 0) + 1
    for c in s:
        if freq[c] == 1:
            print(c)
            return
    print("-1")
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<char, int> freq;
for (char c : s) freq[c]++;
for (char c : s) {
    if (freq[c] == 1) { cout << c << endl; return 0; }
}
cout << -1 << endl;
```

---

### Q67. Remove Duplicate Characters
* **Pattern**: `Remove Duplicate Chars (Order Preserved)` | **Time**: `O(L)` | **Space**: `O(Alphabet)`
* **LeetCode Equivalent**: [LC 316 — Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)

### Problem Statement

Remove repeated characters while preserving the first occurrence.

### Input Format

A string.

### Output Format

Print the resulting string.

### Test Case

```text

Input

programming

Output

progamin

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    seen = set()
    res = []
    for c in s:
        if c not in seen:
            seen.add(c)
            res.append(c)
    print(''.join(res))
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_set<char> seen;
for (char c : s) {
    if (!seen.count(c)) { cout << c; seen.insert(c); }
}
cout << endl;
```

---

### Q68. Anagram Check
* **Pattern**: `Anagram Verification (Frequency Match)` | **Time**: `O(L)` | **Space**: `O(Alphabet)`
* **LeetCode Equivalent**: [LC 242 — Valid Anagram](https://leetcode.com/problems/valid-anagram/)

### Problem Statement

Given two strings, determine whether they are anagrams.

### Input Format

Two strings.

### Output Format

Print `YES` or `NO`.

### Test Case 1

```text

Input

listen

silent

Output

YES

```

### Test Case 2

```text

Input

hello

world

Output

NO

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if len(tokens) < 2: return
    s1, s2 = tokens[0], tokens[1]
    from collections import Counter
    print("YES" if Counter(s1) == Counter(s2) else "NO")
```

#### ⚡ C++ / Java Core Logic
```cpp
vector<int> cnt(256, 0);
for (char c : s1) cnt[c]++;
for (char c : s2) cnt[c]--;
bool ok = true;
for (int x : cnt) if (x != 0) ok = false;
cout << (ok ? "YES" : "NO") << endl;
```

---

### Q69. Duplicate Words
* **Pattern**: `Sentence Duplicate Word Finder` | **Time**: `O(Words)` | **Space**: `O(Words)`
* **LeetCode Equivalent**: [LC 884 — Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/)

### Problem Statement

Given a sentence, find all words that occur more than once.

Comparison should be case-insensitive.

### Input Format

A single sentence.

### Output Format

Print duplicate words.

### Test Case

```text

Input

this is a test this is good

Output

this is

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    words = sys.stdin.read().split()
    counts = {}
    for w in words: counts[w] = counts.get(w, 0) + 1
    seen = set()
    dups = []
    for w in words:
        if counts[w] > 1 and w not in seen:
            seen.add(w)
            dups.append(w)
    print(*(dups) if dups else ["NONE"])
```

#### ⚡ C++ / Java Core Logic
```cpp
unordered_map<string, int> counts;
for (string w : words) counts[w]++;
unordered_set<string> seen;
for (string w : words) {
    if (counts[w] > 1 && !seen.count(w)) {
        cout << w << " ";
        seen.insert(w);
    }
}
cout << endl;
```

---

### Q70. Longest Word
* **Pattern**: `Longest Word with First-Occurrence Tiebreaker` | **Time**: `O(Words)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 524 — Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)

### Problem Statement

Given a sentence, find the longest word.

If multiple words have the same length, return the first one.

### Input Format

A sentence.

### Output Format

Print the longest word.

### Test Case

```text

Input

I love programming challenges

Output

programming

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    words = sys.stdin.read().split()
    if not words: return
    best = words[0]
    for w in words[1:]:
        if len(w) > len(best):
            best = w
    print(best)
```

#### ⚡ C++ / Java Core Logic
```cpp
string best = words[0];
for (string w : words) {
    if (w.length() > best.length()) best = w;
}
cout << best << endl;
```

---


---

## 🔍 SECTION E — SEARCHING & BASIC DSA (Q71–Q75)

Fundamental algorithms: linear scan, binary search, two-pointer palindrome check, in-place reversal & multiset frequency equality.

---

### Q71. Linear Search
* **Pattern**: `Linear Search First Index` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 704 — Binary Search (Linear vs Binary)](https://leetcode.com/problems/binary-search/)

### Problem Statement

Given an array and target `X`, find the index of `X`.

If it does not exist, print `-1`.

### Input Format

```text

N X

array

```

### Output Format

Print the first index of `X`.

### Test Case 1

```text

Input

5 30

10 20 30 40 50

Output

2

```

### Test Case 2

```text

Input

5 100

10 20 30 40 50

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    x = int(tokens[1])
    arr = [int(v) for v in tokens[2:n+2]]
    for i in range(n):
        if arr[i] == x:
            print(i)
            return
    print("-1")
```

#### ⚡ C++ / Java Core Logic
```cpp
for (int i = 0; i < n; i++) {
    if (arr[i] == x) { cout << i << endl; return 0; }
}
cout << -1 << endl;
```

---

### Q72. Binary Search
* **Pattern**: `Binary Search on Sorted Array` | **Time**: `O(log N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 704 — Binary Search](https://leetcode.com/problems/binary-search/)

### Problem Statement

Given a sorted array and target `X`, determine whether `X` exists using binary search.

### Input Format

```text

N X

sorted array

```

### Output Format

Print the index if found; otherwise print `-1`.

### Test Case 1

```text

Input

6 20

5 10 15 20 25 30

Output

3

```

### Test Case 2

```text

Input

6 22

5 10 15 20 25 30

Output

-1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    x = int(tokens[1])
    arr = [int(v) for v in tokens[2:n+2]]
    low, high = 0, n - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == x:
            print(mid)
            return
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    print("-1")
```

#### ⚡ C++ / Java Core Logic
```cpp
int low = 0, high = n - 1;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == x) { cout << mid << endl; return 0; }
    else if (arr[mid] < x) low = mid + 1;
    else high = mid - 1;
}
cout << -1 << endl;
```

---

### Q73. Palindrome
* **Pattern**: `Palindrome Two-Pointer Check` | **Time**: `O(L)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 125 — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

### Problem Statement

Determine whether a given string reads the same forwards and backwards.

### Input Format

A single string.

### Output Format

Print `YES` if it is a palindrome; otherwise print `NO`.

### Test Case 1

```text

Input

madam

Output

YES

```

### Test Case 2

```text

Input

hello

Output

NO

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    s = sys.stdin.read().strip()
    print("YES" if s == s[::-1] else "NO")
```

#### ⚡ C++ / Java Core Logic
```cpp
bool ok = true;
int l = 0, r = s.length() - 1;
while (l < r) {
    if (s[l++] != s[r--]) { ok = false; break; }
}
cout << (ok ? "YES" : "NO") << endl;
```

---

### Q74. Reverse Array
* **Pattern**: `In-Place Array Reversal` | **Time**: `O(N)` | **Space**: `O(1)`
* **LeetCode Equivalent**: [LC 344 — Reverse String](https://leetcode.com/problems/reverse-string/)

### Problem Statement

Reverse an array without using a built-in reverse function.

### Input Format

```text

N

array

```

### Output Format

Print the reversed array.

### Test Case

```text

Input

5

1 2 3 4 5

Output

5 4 3 2 1

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr = [int(x) for x in tokens[1:n+1]]
    print(*(arr[::-1]))
```

#### ⚡ C++ / Java Core Logic
```cpp
reverse(arr.begin(), arr.end());
for (int x : arr) cout << x << " ";
cout << endl;
```

---

### Q75. Array Equality by Frequency
* **Pattern**: `Multiset / Frequency Map Equality` | **Time**: `O(N + M)` | **Space**: `O(N)`
* **LeetCode Equivalent**: [LC 242 — Valid Anagram (Multiset Equality)](https://leetcode.com/problems/valid-anagram/)

### Problem Statement

Given two arrays, determine whether they contain exactly the same elements with the same frequencies.

The order of elements does not matter.

### Input Format

```text

N

array1

M

array2

```

### Output Format

Print `YES` if the arrays are equal by frequency; otherwise print `NO`.

### Test Case 1

```text

Input

5

1 2 2 3 4

5

2 1 4 2 3

Output

YES

```

### Test Case 2

```text

Input

4

1 2 2 3

4

1 2 3 3

Output

NO

```

---

#### 💡 Optimal Python 3 Solution
```python
def solve():
    import sys
    from collections import Counter
    tokens = sys.stdin.read().split()
    if not tokens: return
    n = int(tokens[0])
    arr1 = [int(x) for x in tokens[1:n+1]]
    m = int(tokens[n+1])
    arr2 = [int(x) for x in tokens[n+2:n+2+m]]
    if n != m:
        print("NO")
        return
    print("YES" if Counter(arr1) == Counter(arr2) else "NO")
```

#### ⚡ C++ / Java Core Logic
```cpp
if (n != m) { cout << "NO" << endl; return 0; }
unordered_map<int, int> cnt;
for (int x : arr1) cnt[x]++;
for (int x : arr2) {
    if (--cnt[x] < 0) { cout << "NO" << endl; return 0; }
}
cout << "YES" << endl;
```

---

# 🎯 FINAL PATTERN CHECKLIST & QUICK REFERENCE

### 1. The 10 Most Critical Assessment Patterns
1. **Accumulator + Condition (`if/elif/else`)**: Tax, bonus, penalty, mobile/taxi slabs.
2. **Frequency Map (`OrderedDict` / `Counter` / `unordered_map`)**: Counting frequencies, duplicates, first unique elements.
3. **Running Prefix Sum**: Running sums, range queries (`pref[R+1] - pref[L]`), subarray sum equals K.
4. **Kadane's Algorithm**: Max subarray sum in $O(N)$ with $O(1)$ space (`curr_max = max(x, curr_max + x)`).
5. **Fixed Sliding Window**: Max sum of window size $K$ using add-right, subtract-left.
6. **Two-Pointer Technique**: Array reversal, palindrome verification, moving zeros.
7. **Sorting + Single Pass Scan**: Min absolute difference between elements, Buy 2 Get 1 Free.
8. **Regex / String Tokenizer**: Extracting digit sequences (`re.findall(r'\d+', s)`), transaction parsing.
9. **Binary Search**: Sorted array search with $O(\log N)$ time.
10. **Natural Number Math**: Missing number via $\frac{N(N+1)}{2} - \sum A$.
