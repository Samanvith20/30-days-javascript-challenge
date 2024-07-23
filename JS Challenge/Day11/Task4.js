const asyncTask4 = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(" Async/Await resolved after 2 seconds");
        }, 2000);
    });

    const result = await promise;
    console.log(result);
};

asyncTask4();
