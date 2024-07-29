function countOccurrences(arr, target) {
    if (arr.length === 0) {
      return 0;
    } else if (arr[0] === target) {
      return 1 + countOccurrences(arr.slice(1), target);
    } else {
      return countOccurrences(arr.slice(1), target);
    }
  }
  
  const array1 = [1, 2, 3, 4, 2, 2, 5];
  const target1 = 2;
  console.log(countOccurrences(array1, target1)); 
  
  const array2 = [1, 2, 3, 4, 5];
  const target2 = 6;
  console.log(countOccurrences(array2, target2)); 
  