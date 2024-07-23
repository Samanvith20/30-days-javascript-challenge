const fetchData=async()=>{
    try{
      const data=await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
        const response=await data.json();
        console.log(response);
    }
    catch(error){
      console.log("Error:", error); 
    }
}