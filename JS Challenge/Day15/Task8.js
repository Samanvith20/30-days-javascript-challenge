function memoization(fn){
    let cache={}
    return function(...args){
        let key=JSON.stringify(args)
        if(cache[key]){
            return cache[key]
        }
        else{
            let result=fn(...args)
            cache[key]=result
            return result
        }
    }
}

function factorial(num){
    let result=1
    for(let i=1;i<=num;i++){
        result+=i
    }
    return result
}

let memoizedfactorial=memoization(factorial)
console.log(memoizedfactorial(1000))
console.log(memoizedfactorial(1000))