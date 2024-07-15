function checkNumberSign(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Example usage
let number = 30;
checkNumberSign(number); // Output: Positive
