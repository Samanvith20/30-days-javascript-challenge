fetch('https://invalid-url')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));
