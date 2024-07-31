function validateURL(url) {
 
    let urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?$/;
    let isValid = urlRegex.test(url);

    if (isValid) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

// Example usage
validateURL("https://www.example.com"); 
validateURL("http://example");          
