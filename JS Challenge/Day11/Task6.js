const fetchTask6 = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    console.log("Response object before parsing JSON:", response); 
    return response.json();  
  })
  .then((data) => {
    console.log("Parsed JSON data:", data); 
  })
  .catch((error) => {
    console.log("Error:", error); 
  });

  //The response.json() method is used to extract the JSON body content from the Response object, 