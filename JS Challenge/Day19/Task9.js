function validatePassword(password) {
    
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let isValid = passwordRegex.test(password);

    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}


validatePassword("Password123!");  
validatePassword("password");      
