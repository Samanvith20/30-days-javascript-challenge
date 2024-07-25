async function fetchDataWithTryCatch() {
    try {
      const response = await fetch('https://invalid-url');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchDataWithTryCatch();
  