function memoizedFibonacci() {
    let cache = {};

    function fibonacci(n) {
        if (n <= 1) return n;
        
        if (cache[n]) {
            return cache[n];
        } else {
            cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
            return cache[n];
        }
    }

    return fibonacci;
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(5));  
console.log(fibonacci(10)); 
console.log(fibonacci(50)); 
