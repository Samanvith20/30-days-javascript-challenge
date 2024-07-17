const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result);
