//A JavaScript engine is the program responsible for reading and executing JavaScript code. When you write JavaScript, something has to understand the instructions and perform them. That something is the JavaScript engine.

//console.log() tells the engine to show a value. You will use it in almost every example this month, because it is how you see what your code is doing.

console.log("Hello!"); 
console.log("My name is Sunday");
console.log("I live in Lagos, Nigeria");
console.log("I like Watching Football.");
console.log(2 + 2); //It is used to display messages or values while your Javascript program is running. It is often used for debugging purposes to check the values of variables or to track the flow of execution in the code.

// A variable is a named place used to store a value so that you can use that value later in your program.

// Types of Variable Declarations
// const: used when the variable should not be reassigned.
// let: used when the value may need to be reassigned.
// var: an older way of declaring variables that you will mainly encounter in older JavaScript code.

// const creates a variable that cannot later be reassigned to another value.

// Store the price of a data bundle under a name
const priceOfData = 1500;

// Use the name to show the value
console.log(priceOfData);

// let is used when you expect the value to change.

// Start with one bundle
let bundlesBought = 1;

// The customer buys more, so give the variable a new value
bundlesBought = 3;

// Show the current value
console.log(bundlesBought);

const coursePrice = 50000;
let students = 1;

students = 3;
console.log(typeof students);

const total = coursePrice * students;

console.log(`With ${students} students, the total is ${total}`);

// A condition is a question your code asks that can only be answered with true or false.

// You met the answer type yesterday: a boolean. A condition is simply any expression that produces a boolean.

// Store the student's score
const score = 72;

// Ask five questions about the score
console.log(score > 50);   // is it greater than 50?
console.log(score < 50);   // is it less than 50?
console.log(score >= 72);  // is it 72 or more?
console.log(score === 72); // is it exactly 72?
console.log(score !== 72); // is it anything other than 72?

// && is true only when BOTH sides are true
console.log(true && true);   // both true
console.log(true && false);  // right side false
console.log(false && true);  // left side false
console.log(false && false); // both false

// The two facts we know about this applicant
const applicantScore = 78;
const feePaid = false;

// Admitted only if the score passes AND the fee is paid
console.log(applicantScore >= 50 && feePaid);

// || is true when AT LEAST ONE side is true
console.log(true || false);  // left side true
console.log(false || true);  // right side true
console.log(false || false); // neither is true

// An if statement runs a block of code only when its condition is true. else if and else give your code other paths to take when it is false.

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


let password = "hello123";

if (password === "hello143") {
  console.log("Correct password.");
} else {
  console.log("Wrong password.");
}

let age = 25;
let hasTicket = true;

if (age >= 18 && hasTicket === true) {
  console.log("You may enter.");
}

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It is the weekend.");
}

// switch statement: A switch is useful when comparing one value with several choices:

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

let adultCheckAge = 20;

let message = adultCheckAge >= 18 ? "Adult" : "Not an adult";

console.log(message);

// A conditional statement lets JavaScript choose what to do based on whether something is true or false.

function assignGrade(score) {
    if (score >= 70) {
    console.log('Grade: A');
    } else if (score >= 60) {
    console.log('Grade: B');
    } else if (score >= 50) {
    console.log('Grade: C');
    } else {
    console.log('Grade: F');
    }
}

assignGrade(72);
assignGrade(65);
assignGrade(50);

// An array is an ordered list of values stored under one name. Each value has a position, called its index, and the positions start at 0, not 1.

// A list of four courses, in order
const courses = ['HTML', 'CSS', 'Tailwind', 'JavaScript'];

// How many items are in the list?
console.log(courses.length);

// The first item is at position 0
console.log(courses[0]);

// The last item: length - 1, the older way
console.log(courses[courses.length - 1]);

// The last item: at(-1), the clearer way
console.log(courses.at(-1));

// A cart with one item
const cart = ['rice'];

// Add to the end, then to the front
cart.push('beans');
cart.unshift('oil');
console.log(cart);

// Remove from the end, keeping hold of what was removed
const removed = cart.pop();
console.log(removed);
console.log(cart);

let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);

// The class
const classStudents = [
  { name: 'Chidinma', score: 88, paid: true },
  { name: 'Musa', score: 54, paid: false },
  { name: 'Tunde', score: 71, paid: true },
  { name: 'Amaka', score: 39, paid: true }
];

// Keep only the students who scored 50 or more
const passing = classStudents.filter((student) => student.score >= 50);

// Keep only the students who have not paid
const unpaid = classStudents.filter((student) => !student.paid);

console.log(passing.length);
console.log(unpaid);