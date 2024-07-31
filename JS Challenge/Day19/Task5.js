function capturePhoneNumberComponents(phoneNumber) {
    
    let phoneRegex = /\((\d{3})\) (\d{3})-(\d{4})/;
    let matches = phoneNumber.match(phoneRegex);

    if (matches) {
        console.log(`Area Code: ${matches[1]}`);
        console.log(`Central Office Code: ${matches[2]}`);
        console.log(`Line Number: ${matches[3]}`);
    } else {
        console.log("No match found.");
    }
}


capturePhoneNumberComponents("(123) 456-7890");
