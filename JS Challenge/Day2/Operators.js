
//  Activity1:Arithmetic Operators

// Task1:add two numbers
let a=10
let b=20
let c=a+b
console.log(c);

// Task2:subtract two numbers
let Onenumber=10
let Twonumber=20
let Subtract=Twonumber-Onenumber
console.log(Subtract);

// Task3:multiply two numbers
let Firstnumber=10
let Secondnumber=20
let Multiply=Firstnumber*Secondnumber
console.log(Multiply);

// Task4:divide two numbers
let First=10
let Second=20
let Divide=Second/First
console.log(Divide);

//Task5:To find the remainder
let one=10
let two=20
let Remainder=two%one
console.log(Remainder);

// Actvity2:Assignment Operators

//Task6:use "+=" operator to add a number
let x=10
x+=20
console.log(x);

//Task7:use "-=" operator to subtract a number
let y=20
y-=10
console.log(y);

//Activity3:Comparison Operators

//Task8,9,10

let compare1=20
let compare2=10

let Task8=compare1>compare2
let Task8Compare=compare1<compare2
console.log(Task8,Task8Compare);

let Task9=compare1>=compare2
let Task9Compare=compare1<=compare2
console.log(Task9,Task9Compare);

let Task10=compare1==compare2
let Task10Compare=compare1===compare2
console.log(Task10,Task10Compare);

//Activity4:Logical Operators

//Task11:uses && and combine two conditions  
let logicalOne = 10;
let logicalTwo= 20;

// Combine two conditions using && and log the result to the console
if (logicalOne > 5 && logicalTwo > 15) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

//Task12:uses || and combine two conditions
let logicalThree = 10;
let logicalFour = 20;

if(logicalThree > 15 || logicalFour > 15){
    console.log("At least one condition is true");
}

//Task13:uses ! to negate a condition
// Define a variable
let isRaining = true;

// Use the ! operator to negate the condition and log the result to the console
if (!isRaining) {
  console.log("It's not raining.");
} else {
  console.log("It's raining.");
}


//Activity5:Ternary Operators

let number=30
let result=number>0?"Positive":"Negative"
console.log(result);