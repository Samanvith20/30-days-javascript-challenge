// Task 1: Variable Creation
var a = 10;
console.log(a); // Output: 10

let b = "chai aur code";
console.log(b); // Output: chai aur code

// Task 2: Constant Declaration
const c = true;
console.log(c); // Output: true

// Task 3: Data Types
let d = 10;
let e = "chai aur coffee";
let f = true;
let g = [1, 2, 3, 4, 5];
let h = { chai: "chai", coffee: "coffee" };
let i = null;

console.log(typeof(d)); // Output: number
console.log(typeof(e)); // Output: string
console.log(typeof(f)); // Output: boolean
console.log(typeof(g)); // Output: object
console.log(typeof(h)); // Output: object
console.log(typeof(i)); // Output: object (Note: typeof null is "object" due to a historical quirk in JavaScript)

// Task 4: Reassign the Variable
// Declare a variable and assign an initial value
let myVariable = 10;
console.log("Initial value:", myVariable); // Output: Initial value: 10

// Reassign a new value to the variable
myVariable = 20;
console.log("New value:", myVariable); // Output: New value: 20

// Task 5: Const
// Declare a constant and assign an initial value
const myConstant = 10;
console.log("Initial value:", myConstant); // Output: Initial value: 10

// Attempt to reassign a new value to the constant
try {
    myConstant = 20; // This will cause an error
} catch (error) {
    console.error("Error when reassigning myConstant:", error.message);
    // Output: Error when reassigning myConstant: Assignment to constant variable.
}

// Error occurs because we cannot reassign a new value to a constant variable.


