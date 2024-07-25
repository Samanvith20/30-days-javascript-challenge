axios.get("")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });