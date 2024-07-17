// Higher Order Functions are those functions that take other functions as arguments or return functions as their results.

const callFunctionNTimes = (fn, n) => {
    for (let i = 0; i < n; i++) {
        fn();
    }
};


const sayHello = () => console.log("Hello!");

callFunctionNTimes(sayHello, 3);

