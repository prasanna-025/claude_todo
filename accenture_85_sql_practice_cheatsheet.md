# ⚡ ACCENTURE SQL PRACTICE — 85 QUESTIONS & MASTER CHEAT SHEET

Complete queries, logic explanations, query outputs, and LeetCode SQL equivalents for all **85 Accenture SQL Practice Questions**.

---

## 📑 TABLE OF CONTENTS
1. [Schema Reference & Setup](#-database-schema-reference)
2. [Section A: Basic SELECT, WHERE & Filtering (Q1–Q12)](#-section-a-basic-select-where--filtering)
3. [Section B: Aggregate Functions (Q13–Q22)](#-section-b-aggregate-functions)
4. [Section C: GROUP BY & HAVING (Q23–Q30)](#-section-c-group-by--having)
5. [Section D: ORDER BY & Ranking (Q31–Q38)](#-section-d-order-by--ranking)
6. [Section E: Second / Nth Highest Salary (Q39–Q45)](#-section-e-second--nth-highest-salary)
7. [Section F: Duplicate Records (Q46–Q51)](#-section-f-duplicate-records)
8. [Section G: JOIN Questions (Q52–Q60)](#-section-g-join-questions)
9. [Section H: SELF JOIN (Q61–Q64)](#-section-h-self-join)
10. [Section I: SUBQUERIES (Q65–Q70)](#-section-i-subqueries)
11. [Section J: CASE Statements & Conditional SQL (Q71–Q75)](#-section-j-case-statements--conditional-sql)
12. [Section K: String & Date SQL (Q76–Q82)](#-section-k-string--date-sql)
13. [Section L: Window Functions & Advanced SQL (Q83–Q85)](#-section-l-window-functions--advanced-sql)

---

# 🗄️ DATABASE SCHEMA REFERENCE

```sql
-- Employees Table
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    salary DECIMAL(10,2),
    manager_id INT,
    joining_date DATE,
    score INT
);

-- Departments Table
CREATE TABLE Departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);
```

---

# 🟦 SECTION A: BASIC SELECT, WHERE & FILTERING

### Q1. Employee Details
**Task**: Display all columns from the `Employees` table.
```sql
SELECT * FROM Employees;
```
* **LC Equivalent**: [LC 1757 — Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)

### Q2. Employee Names
**Task**: Display only the employee names and salaries from the `Employees` table.
```sql
SELECT name, salary FROM Employees;
```

### Q3. High Salary Employees
**Task**: Find all employees whose salary is greater than `50000`.
```sql
SELECT * FROM Employees WHERE salary > 50000;
```

### Q4. Employees from Department
**Task**: Find all employees who belong to the `IT` department.
```sql
-- When department column exists directly:
SELECT * FROM Employees WHERE department = 'IT';

-- When joining with Departments table:
SELECT e.* FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
WHERE d.department_name = 'IT';
```

### Q5. Salary Range
**Task**: Find employees whose salary is between `30000` and `60000`.
```sql
SELECT * FROM Employees WHERE salary BETWEEN 30000 AND 60000;
```
* *Note*: `BETWEEN` is inclusive of both `30000` and `60000`.

### Q6. Employees Not in IT
**Task**: Find employees who do not belong to the `IT` department.
```sql
SELECT * FROM Employees WHERE department != 'IT' OR department IS NULL;
```
* *Pro Tip*: Never forget `OR department IS NULL` because `NULL != 'IT'` evaluates to `UNKNOWN` in SQL 3-valued logic.

### Q7. Names Starting with A
**Task**: Find employees whose name starts with the letter `A`.
```sql
SELECT * FROM Employees WHERE name LIKE 'A%';
```
* **LC Equivalent**: [LC 1527 — Patients With a Condition](https://leetcode.com/problems/patients-with-a-condition/)

### Q8. Names Ending with N
**Task**: Find employees whose name ends with the letter `n`.
```sql
SELECT * FROM Employees WHERE name LIKE '%n';
```

### Q9. Salary Greater Than 40000
**Task**: Find employees whose salary is greater than `40000`.
```sql
SELECT * FROM Employees WHERE salary > 40000;
```

### Q10. Multiple Conditions
**Task**: Find employees who belong to the `IT` department and have a salary greater than `50000`.
```sql
SELECT * FROM Employees WHERE department = 'IT' AND salary > 50000;
```

### Q11. NULL Values
**Task**: Find employees whose department is `NULL`.
```sql
SELECT * FROM Employees WHERE department_id IS NULL;
```
* **LC Equivalent**: [LC 584 — Find Customer Referee](https://leetcode.com/problems/find-customer-referee/)

### Q12. DISTINCT Departments
**Task**: Display all unique department names.
```sql
SELECT DISTINCT department_name FROM Departments;
```
* **LC Equivalent**: [LC 1148 — Article Views I](https://leetcode.com/problems/article-views-i/)

---

# 📊 SECTION B: AGGREGATE FUNCTIONS

### Q13. Total Salary
**Task**: Find the total salary of all employees.
```sql
SELECT SUM(salary) AS total_salary FROM Employees;
```

### Q14. Average Salary
**Task**: Find the average salary of all employees.
```sql
SELECT AVG(salary) AS average_salary FROM Employees;
```

### Q15. Maximum Salary
**Task**: Find the highest salary in the `Employees` table.
```sql
SELECT MAX(salary) AS highest_salary FROM Employees;
```

### Q16. Minimum Salary
**Task**: Find the lowest salary in the `Employees` table.
```sql
SELECT MIN(salary) AS lowest_salary FROM Employees;
```

### Q17. Employee Count
**Task**: Find the total number of employees.
```sql
SELECT COUNT(*) AS total_employees FROM Employees;
```

### Q18. Department Employee Count
**Task**: Find the number of employees in each department.
```sql
SELECT department_id, COUNT(*) AS employee_count
FROM Employees
GROUP BY department_id;
```
* **LC Equivalent**: [LC 1075 — Project Employees I](https://leetcode.com/problems/project-employees-i/)

### Q19. Department Average Salary
**Task**: Find the average salary for each department.
```sql
SELECT department_id, ROUND(AVG(salary), 2) AS average_salary
FROM Employees
GROUP BY department_id;
```

### Q20. Department Maximum Salary
**Task**: Find the highest salary in each department.
```sql
SELECT department_id, MAX(salary) AS max_salary
FROM Employees
GROUP BY department_id;
```

### Q21. Department Minimum Salary
**Task**: Find the lowest salary in each department.
```sql
SELECT department_id, MIN(salary) AS min_salary
FROM Employees
GROUP BY department_id;
```

### Q22. Department Total Salary
**Task**: Find the total salary paid by each department.
```sql
SELECT department_id, SUM(salary) AS total_salary
FROM Employees
GROUP BY department_id;
```

---

# ⚖️ SECTION C: GROUP BY & HAVING

### Q23. Departments with More Than 5 Employees
```sql
SELECT department_id, COUNT(*) AS emp_count
FROM Employees
GROUP BY department_id
HAVING COUNT(*) > 5;
```
* **LC Equivalent**: [LC 596 — Classes More Than 5 Students](https://leetcode.com/problems/classes-more-than-5-students/)

### Q24. Departments with High Average Salary (> 50000)
```sql
SELECT department_id, AVG(salary) AS avg_salary
FROM Employees
GROUP BY department_id
HAVING AVG(salary) > 50000;
```

### Q25. Departments with Total Salary (> 500000)
```sql
SELECT department_id, SUM(salary) AS total_payout
FROM Employees
GROUP BY department_id
HAVING SUM(salary) > 500000;
```

### Q26. Count Employees by Job Role
```sql
SELECT job_role, COUNT(*) AS employee_count
FROM Employees
GROUP BY job_role;
```

### Q27. Job Roles with More Than 3 Employees
```sql
SELECT job_role, COUNT(*) AS count
FROM Employees
GROUP BY job_role
HAVING COUNT(*) > 3;
```

### Q28. Salary Range Groups
**Task**: Group employees by department and display average, maximum, and minimum salary.
```sql
SELECT department_id,
       AVG(salary) AS avg_salary,
       MAX(salary) AS max_salary,
       MIN(salary) AS min_salary
FROM Employees
GROUP BY department_id;
```

### Q29. Department with Maximum Employees
```sql
SELECT department_id, COUNT(*) AS emp_count
FROM Employees
GROUP BY department_id
ORDER BY emp_count DESC
LIMIT 1;
```

### Q30. Department with Minimum Employees
```sql
SELECT department_id, COUNT(*) AS emp_count
FROM Employees
GROUP BY department_id
ORDER BY emp_count ASC
LIMIT 1;
```

---

# 🔢 SECTION D: ORDER BY & RANKING

### Q31. Employees by Salary Ascending
```sql
SELECT * FROM Employees ORDER BY salary ASC;
```

### Q32. Employees by Salary Descending
```sql
SELECT * FROM Employees ORDER BY salary DESC;
```

### Q33. Top 5 Salaries
```sql
SELECT DISTINCT salary FROM Employees ORDER BY salary DESC LIMIT 5;
```

### Q34. Top 3 Employees
```sql
SELECT * FROM Employees ORDER BY salary DESC LIMIT 3;
```

### Q35. Lowest 3 Salaries
```sql
SELECT * FROM Employees ORDER BY salary ASC LIMIT 3;
```

### Q36. Department and Salary Sorting
```sql
SELECT * FROM Employees ORDER BY department_id ASC, salary DESC;
```

### Q37. Highest Paid Employee
```sql
SELECT * FROM Employees ORDER BY salary DESC LIMIT 1;
```

### Q38. Lowest Paid Employee
```sql
SELECT * FROM Employees ORDER BY salary ASC LIMIT 1;
```

---

# 🥇 SECTION E: SECOND / NTH HIGHEST SALARY

### Q39. Second Highest Salary
```sql
-- Method 1: Subquery
SELECT MAX(salary) AS SecondHighestSalary
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);

-- Method 2: LIMIT OFFSET
SELECT DISTINCT salary AS SecondHighestSalary
FROM Employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```
* **LC Equivalent**: [LC 176 — Second Highest Salary](https://leetcode.com/problems/second-highest-salary/)

### Q40. Third Highest Salary
```sql
SELECT DISTINCT salary AS ThirdHighestSalary
FROM Employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
```

### Q41. Nth Highest Salary (Function Template)
```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE M INT;
  SET M = N - 1;
  RETURN (
      SELECT DISTINCT salary FROM Employees
      ORDER BY salary DESC
      LIMIT 1 OFFSET M
  );
END;
```
* **LC Equivalent**: [LC 177 — Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)

### Q42. Second Highest Employee Record
```sql
SELECT * FROM Employees
WHERE salary = (
    SELECT MAX(salary) FROM Employees
    WHERE salary < (SELECT MAX(salary) FROM Employees)
);
```

### Q43. Second Highest Salary per Department
```sql
WITH RankedSalaries AS (
    SELECT *,
           DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
    FROM Employees
)
SELECT * FROM RankedSalaries WHERE rnk = 2;
```
* **LC Equivalent**: [LC 184 — Department Highest Salary](https://leetcode.com/problems/department-highest-salary/)

### Q44. Third Highest Salary per Department
```sql
WITH RankedSalaries AS (
    SELECT *,
           DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
    FROM Employees
)
SELECT * FROM RankedSalaries WHERE rnk = 3;
```

### Q45. Employees Above Second Highest Salary
```sql
SELECT * FROM Employees
WHERE salary > (
    SELECT MAX(salary) FROM Employees
    WHERE salary < (SELECT MAX(salary) FROM Employees)
);
```

---

# 👯 SECTION F: DUPLICATE RECORDS

### Q46. Find Duplicate Names
```sql
SELECT name, COUNT(*) AS count
FROM Employees
GROUP BY name
HAVING COUNT(*) > 1;
```
* **LC Equivalent**: [LC 182 — Duplicate Emails](https://leetcode.com/problems/duplicate-emails/)

### Q47. Find Duplicate Salaries
```sql
SELECT salary, COUNT(*) AS count
FROM Employees
GROUP BY salary
HAVING COUNT(*) > 1;
```

### Q48. Find Duplicate Rows (Name + Department)
```sql
SELECT name, department_id, COUNT(*) AS count
FROM Employees
GROUP BY name, department_id
HAVING COUNT(*) > 1;
```

### Q49. Count Duplicate Records
```sql
SELECT name, department_id, COUNT(*) AS occurrences
FROM Employees
GROUP BY name, department_id
HAVING COUNT(*) > 1;
```

### Q50. Delete Duplicate Rows (Keep 1 Copy)
```sql
DELETE e1 FROM Employees e1
INNER JOIN Employees e2
WHERE e1.name = e2.name
  AND e1.department_id = e2.department_id
  AND e1.employee_id > e2.employee_id;
```
* **LC Equivalent**: [LC 196 — Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/)

### Q51. Delete Duplicates Keeping Minimum ID
```sql
DELETE e1 FROM Employees e1
JOIN Employees e2
WHERE e1.name = e2.name AND e1.employee_id > e2.employee_id;
```

---

# 🔗 SECTION G: JOIN QUESTIONS

### Q52. Employee Department Names
```sql
SELECT e.name AS employee_name, d.department_name
FROM Employees e
INNER JOIN Departments d ON e.department_id = d.department_id;
```
* **LC Equivalent**: [LC 1378 — Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/)

### Q53. Employees Without Department
```sql
SELECT e.*
FROM Employees e
LEFT JOIN Departments d ON e.department_id = d.department_id
WHERE d.department_id IS NULL;
```

### Q54. Departments Without Employees
```sql
SELECT d.*
FROM Departments d
LEFT JOIN Employees e ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;
```
* **LC Equivalent**: [LC 183 — Customers Who Never Order](https://leetcode.com/problems/customers-who-never-order/)

### Q55. Employee Name, Department Name and Salary
```sql
SELECT e.name, d.department_name, e.salary
FROM Employees e
LEFT JOIN Departments d ON e.department_id = d.department_id;
```

### Q56. Department Name and Average Salary
```sql
SELECT d.department_name, ROUND(AVG(e.salary), 2) AS average_salary
FROM Departments d
JOIN Employees e ON d.department_id = e.department_id
GROUP BY d.department_name;
```

### Q57. Highest Salary by Department
```sql
SELECT d.department_name, e.name, e.salary
FROM Employees e
JOIN Departments d ON e.department_id = d.department_id
WHERE (e.department_id, e.salary) IN (
    SELECT department_id, MAX(salary)
    FROM Employees
    GROUP BY department_id
);
```

### Q58. Employees Above Department Average
```sql
SELECT e.name, e.salary, e.department_id
FROM Employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE department_id = e.department_id
);
```

### Q59. Employee and Manager Names
```sql
SELECT e.name AS Employee, m.name AS Manager
FROM Employees e
LEFT JOIN Employees m ON e.manager_id = m.employee_id;
```

### Q60. Employees Without Manager
```sql
SELECT name FROM Employees WHERE manager_id IS NULL;
```

---

# 🪞 SECTION H: SELF JOIN

### Q61. Employee-Manager Relationship via SELF JOIN
```sql
SELECT e.name AS Employee, m.name AS Manager
FROM Employees e
INNER JOIN Employees m ON e.manager_id = m.employee_id;
```

### Q62. Employees Earning More Than Their Manager
```sql
SELECT e.name AS Employee
FROM Employees e
INNER JOIN Employees m ON e.manager_id = m.employee_id
WHERE e.salary > m.salary;
```
* **LC Equivalent**: [LC 181 — Employees Earning More Than Their Managers](https://leetcode.com/problems/employees-earning-more-than-their-managers/)

### Q63. Employees with Same Manager (Pairs)
```sql
SELECT e1.name AS Employee1, e2.name AS Employee2, e1.manager_id
FROM Employees e1
JOIN Employees e2 ON e1.manager_id = e2.manager_id AND e1.employee_id < e2.employee_id
WHERE e1.manager_id IS NOT NULL;
```

### Q64. Employees in Same Department (Pairs)
```sql
SELECT e1.name AS Employee1, e2.name AS Employee2, e1.department_id
FROM Employees e1
JOIN Employees e2 ON e1.department_id = e2.department_id AND e1.employee_id < e2.employee_id;
```

---

# 📦 SECTION I: SUBQUERIES

### Q65. Salary Above Overall Average
```sql
SELECT * FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);
```

### Q66. Highest Salary via Subquery
```sql
SELECT * FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);
```

### Q67. Second Highest Salary via Subquery
```sql
SELECT MAX(salary) AS second_highest
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);
```

### Q68. Employees in Highest-Paid Department
```sql
SELECT * FROM Employees
WHERE department_id = (
    SELECT department_id
    FROM Employees
    GROUP BY department_id
    ORDER BY AVG(salary) DESC
    LIMIT 1
);
```

### Q69. Above Department Average (Correlated Subquery)
```sql
SELECT e.name, e.salary, e.department_id
FROM Employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE department_id = e.department_id
);
```

### Q70. Employees in IT via Subquery
```sql
SELECT * FROM Employees
WHERE department_id = (
    SELECT department_id FROM Departments WHERE department_name = 'IT'
);
```

---

# 🔀 SECTION J: CASE STATEMENTS & CONDITIONAL SQL

### Q71. Salary Category (Low, Medium, High)
```sql
SELECT name, salary,
       CASE
           WHEN salary < 30000 THEN 'Low'
           WHEN salary <= 60000 THEN 'Medium'
           ELSE 'High'
       END AS salary_category
FROM Employees;
```
* **LC Equivalent**: [LC 1907 — Count Salary Categories](https://leetcode.com/problems/count-salary-categories/)

### Q72. Employee Bonus
```sql
SELECT name, salary,
       CASE
           WHEN salary < 30000 THEN salary * 0.10
           WHEN salary <= 60000 THEN salary * 0.05
           ELSE salary * 0.03
       END AS bonus_amount
FROM Employees;
```

### Q73. Pass or Fail Classification
```sql
SELECT name, score,
       CASE
           WHEN score >= 50 THEN 'Pass'
           ELSE 'Fail'
       END AS result
FROM Employees;
```

### Q74. Salary Grade (A, B, C, D)
```sql
SELECT name, salary,
       CASE
           WHEN salary >= 80000 THEN 'A'
           WHEN salary >= 60000 THEN 'B'
           WHEN salary >= 40000 THEN 'C'
           ELSE 'D'
       END AS salary_grade
FROM Employees;
```

### Q75. Department Category by Size
```sql
SELECT d.department_name,
       COUNT(e.employee_id) AS total_employees,
       CASE
           WHEN COUNT(e.employee_id) >= 20 THEN 'Large'
           WHEN COUNT(e.employee_id) >= 10 THEN 'Medium'
           ELSE 'Small'
       END AS department_category
FROM Departments d
LEFT JOIN Employees e ON d.department_id = e.department_id
GROUP BY d.department_name;
```

---

# 📅 SECTION K: STRING & DATE SQL

### Q76. Name Length > 5
```sql
SELECT * FROM Employees WHERE LENGTH(name) > 5;
```
* **LC Equivalent**: [LC 1683 — Invalid Tweets](https://leetcode.com/problems/invalid-tweets/)

### Q77. Uppercase Names
```sql
SELECT UPPER(name) AS uppercase_name FROM Employees;
```
* **LC Equivalent**: [LC 1667 — Fix Names in a Table](https://leetcode.com/problems/fix-names-in-a-table/)

### Q78. Lowercase Departments
```sql
SELECT LOWER(department_name) AS lowercase_dept FROM Departments;
```

### Q79. First Character of Name
```sql
SELECT name, SUBSTRING(name, 1, 1) AS first_letter FROM Employees;
```

### Q80. Employees Joined After Date
```sql
SELECT * FROM Employees WHERE joining_date > '2025-01-01';
```

### Q81. Employees Joined in Current Year
```sql
SELECT * FROM Employees WHERE YEAR(joining_date) = YEAR(CURDATE());
```

### Q82. Years of Experience
```sql
SELECT name, joining_date,
       TIMESTAMPDIFF(YEAR, joining_date, CURDATE()) AS years_experience
FROM Employees;
```

---

# 🪟 SECTION L: WINDOW FUNCTIONS & ADVANCED SQL

### Q83. Salary Ranking (`RANK` vs `DENSE_RANK`)
```sql
SELECT employee_id, name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rnk,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk
FROM Employees;
```
* **LC Equivalent**: [LC 178 — Rank Scores](https://leetcode.com/problems/rank-scores/)

### Q84. Department Salary Ranking (`PARTITION BY`)
```sql
SELECT employee_id, name, department_id, salary,
       DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS dept_salary_rank
FROM Employees;
```
* **LC Equivalent**: [LC 185 — Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/)

### Q85. Cumulative Running Total of Salaries
```sql
SELECT employee_id, name, salary,
       SUM(salary) OVER (ORDER BY employee_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM Employees;
```
* **LC Equivalent**: [LC 1204 — Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/)
