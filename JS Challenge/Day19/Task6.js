function captureEmailComponents(email) {
   
    let emailRegex = /([^@]+)@([^@]+)/;
    let matches = email.match(emailRegex);

    if (matches) {
        console.log(`Username: ${matches[1]}`);
        console.log(`Domain: ${matches[2]}`);
    } else {
        console.log("No match found.");
    }
}


captureEmailComponents("user@example.com");
