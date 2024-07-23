//The Promise.all() method takes an iterable of promises as input and returns a single promise that resolves when all of the promises in the iterable have fulfilled, or rejects if any promise is rejected. The result is an array of the fulfillment values in the order of the original promises.

const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => console.log(" Promise.all resolved", values))
    .catch(error => console.error(error));
