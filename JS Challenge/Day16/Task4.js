
function Maximum(arr){
      if(arr.length==0) return 0
      else{
          return Math.max(arr[0],Maximum(arr.slice(1)))
      }
}

const array=[1,2,3,4,5]
const result=Maximum(array)
console.log(result);