# JavaScript Learning

This repository contains beginner-friendly JavaScript practice. The examples in
[`script.js`](./script.js) introduce the basic ideas used to make a program
display information, store values, make decisions, and reuse instructions.

## Running the script

Make sure Node.js is installed, then run:

```bash
node script.js
```

The program prints its results in the terminal.

## Topics covered

### 1. Displaying information with `console.log()`

`console.log()` displays a message or value in the terminal:

```javascript
console.log("Hello!");
console.log(2 + 2);
```

Output:

```text
Hello!
4
```

### 2. Variables

A variable is a named place for storing a value.

- `const` is used when a variable should not be reassigned.
- `let` is used when a variable may change.
- `var` is an older declaration style that may appear in older JavaScript
  programs.

```javascript
const priceOfData = 1500;

let bundlesBought = 1;
bundlesBought = 3;

console.log(priceOfData);
console.log(bundlesBought);
```

The script also uses `typeof` to check the type of a value:

```javascript
console.log(typeof students);
```

### 3. Arithmetic and template literals

JavaScript can calculate values with operators such as `+`, `-`, `*`, and `/`.
The script calculates the total course price:

```javascript
const coursePrice = 50000;
let students = 3;
const total = coursePrice * students;

console.log(`With ${students} students, the total is ${total}`);
```

Backticks create a template literal. `${...}` places a variable or expression
inside the text.

### 4. Conditions and comparisons

A condition is an expression that produces either `true` or `false`. The script
demonstrates these comparison operators:

| Operator | Meaning |
| --- | --- |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `===` | Exactly equal to |
| `!==` | Not equal to |

Example:

```javascript
const score = 72;

console.log(score > 50);
console.log(score === 72);
console.log(score !== 72);
```

### 5. Logical operators

Logical operators combine conditions:

- `&&` means **and**; both conditions must be true.
- `||` means **or**; at least one condition must be true.

```javascript
const applicantScore = 78;
const feePaid = false;

console.log(applicantScore >= 50 && feePaid);
```

The applicant is not admitted by this check because the fee has not been paid.

### 6. `if`, `else if`, and `else`

Conditional statements allow a program to choose what to do:

```javascript
let gradeScore = 75;

if (gradeScore >= 80) {
  console.log("Excellent");
} else if (gradeScore >= 60) {
  console.log("Good");
} else if (gradeScore >= 40) {
  console.log("Pass");
} else {
  console.log("Try again");
}
```

Only the first matching branch runs. With a score of `75`, the output is
`Good`.

The script also uses conditions to check a password, confirm that someone is
old enough and has a ticket, and identify a weekend day.

### 7. `switch` statements

`switch` compares one value with several possible cases:

```javascript
let switchDay = "Sunday";

switch (switchDay) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost the weekend.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Another day.");
}
```

`break` stops the switch after a matching case. `default` runs when no case
matches.

### 8. The ternary operator

The ternary operator is a short form for a simple `if...else` decision:

```javascript
const adultCheckAge = 20;
const message = adultCheckAge >= 18 ? "Adult" : "Not an adult";

console.log(message);
```

The value before `?` is the condition. The first value is selected when it is
true, and the value after `:` is selected when it is false.

### 9. Functions

A function is a reusable group of instructions. The `assignGrade` function
receives a score and prints the appropriate grade:

```javascript
function assignGrade(score) {
  if (score >= 70) {
    console.log("Grade: A");
  } else if (score >= 60) {
    console.log("Grade: B");
  } else if (score >= 50) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
}

assignGrade(72);
assignGrade(65);
assignGrade(50);
assignGrade(40);
```

The function is written once and called with different scores. Its outputs are
`Grade: A`, `Grade: B`, `Grade: C`, and `Grade: F`.

## Practice activities

After running the script, try changing:

1. `students` and `coursePrice`, then observe the new total.
2. `score` and `gradeScore`, then observe the comparison and grade results.
3. `feePaid` from `false` to `true`.
4. `switchDay` to `"Monday"`, `"Friday"`, or another day.
5. The scores passed to `assignGrade()`.

These small changes help demonstrate how JavaScript values affect program
decisions.
