function outerfunciton(){
    let outerVar = 10;
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}

 //outerfunciton()()

 let innerFunction=outerfunciton();
    innerFunction();
