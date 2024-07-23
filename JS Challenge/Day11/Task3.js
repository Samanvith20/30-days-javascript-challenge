const fetchData = (data) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data);
    }, 1000);
});

fetchData(" Fetching data step 1")
    .then(data => {
        console.log(data);
        return fetchData(" Fetching data step 2");
    })
    .then(data => {
        console.log(data);
        return fetchData(" Fetching data step 3");
    })
    .then(data => console.log(data));
