const asyncTask5 = async () => {
    const promise = new Promise((_,reject) => {
        setTimeout(() => {
            reject(" Async/Await reject after 2 seconds");
        }, 2000);
    });
   try {
      const result = await promise;
      console.log(result);
   } catch (error) {
         console.log(error);
   }
    
}
asyncTask5()