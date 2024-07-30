function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is greater than array length
    if (k === 0) return arr;

    // Reverse helper function
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap
            start++;
            end--;
        }
    }

    // Reverse the whole array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the rest of the array
    reverse(arr, k, n - 1);

    return arr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotateArray(arr1, k)); 

arr1 = [1, 2, 3, 4, 5];
k = 2;
console.log(rotateArray(arr1, k)); 
