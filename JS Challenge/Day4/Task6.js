function factorial(n) {
    let result = 1;
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}


let number = 5;
console.log(`The factorial of ${number} is:`, factorial(number));
