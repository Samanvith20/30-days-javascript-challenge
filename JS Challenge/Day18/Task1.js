
function bubblesort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;

}
let arr1=[64, 34, 25, 12, 22, 11, 90];
 console.log(bubblesort(arr1));