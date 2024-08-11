 // Function to save user input to localStorage
 function saveUserData(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    displayUserData();
}

// Function to retrieve and display user data from localStorage
function displayUserData() {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');

    document.getElementById('displayName').textContent = `Name: ${savedName || ''}`;
    document.getElementById('displayEmail').textContent = `Email: ${savedEmail || ''}`;
}

// Add event listener to the form
document.getElementById('userForm').addEventListener('submit', saveUserData);

// Display saved data on page load
window.onload = displayUserData;