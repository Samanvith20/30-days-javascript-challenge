// Function to find the largest of three numbers
function findLargest(a, b, c) {
    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }

    return largest;
}

// Example usage
let num1 = 10;
let num2 = 20;
let num3 = 15;

let largestNumber = findLargest(num1, num2, num3);
console.log("The largest number is: " + largestNumber); // Output: The largest number is: 20
