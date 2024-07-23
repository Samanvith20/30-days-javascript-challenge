let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise is Rejected");
    },2000);
})

// The callback to execute when the Promise is rejected.
promise.catch((error)=>{
    console.log(error);
})