// Enhanced object literals:

// provide a more succinct syntax for creating objects. They allow you to use shorthand for property names and methods, and enable the grouping of variables from the current scope into an object. 
//This simplifies the code, making it cleaner and easier to read.

const name = 'Samanvith';
const age = 22;

const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);
person.greet();
