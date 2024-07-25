function getRandomPromise() {
    return new Promise((resolve, reject) => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
    });
  }
  
  getRandomPromise()
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error));
  