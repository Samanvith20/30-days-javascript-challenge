 const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is resolved");
    },2000);

 })
 promise.then((data)=>{
        console.log(data);
    })

 