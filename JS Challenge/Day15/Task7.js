
// A memoization function will take another function as input and return a new function that caches the results of previous computations.


function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args); // Convert arguments array to a JSON string
        if (cache[key]) {
            return cache[key]; // Return cached result if it exists
        } else {
            const result = fn(...args); // Compute the result
            cache[key] = result; // Store result in cache
            return result;
        }
    };
}




