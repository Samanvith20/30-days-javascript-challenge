function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

let sortedArray1 = [1, 3, 5, 7];
let sortedArray2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(sortedArray1, sortedArray2)); 

sortedArray1 = [0, 9, 10];
sortedArray2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(sortedArray1, sortedArray2)); 