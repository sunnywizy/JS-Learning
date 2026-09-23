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