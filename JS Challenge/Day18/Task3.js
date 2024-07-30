
function Quicksort(arr){
    let n=arr.length
    if(n<=1){
        return arr
    }
    let pivot=arr[n-1]
    let left=[]
    let right=[]
    for(let i=0; i<n-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...Quicksort(left), pivot, ...Quicksort(right)]
}
let arr1=[64, 34, 25, 12, 22, 11, 90];
console.log(Quicksort(arr1));