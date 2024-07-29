function sumOfAllArray(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumOfAllArray(arr.slice(1));
    }
  }
  
  const array = [1, 2, 3, 4, 5];
  const result = sumOfAllArray(array);
  console.log(result); 
  