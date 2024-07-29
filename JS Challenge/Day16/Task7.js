function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
console.log(binarySearch([10, 20, 30, 40, 50], 25)); 
console.log(binarySearch([7, 14, 21, 28, 35], 28)); 