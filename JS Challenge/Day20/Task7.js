// Function to save data to sessionStorage
function Savedata(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    DisplayData();
}

// Function to display data from sessionStorage
function DisplayData() {
    let name = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    document.getElementById('displayName').textContent = `Name: ${name || ''}`;
    document.getElementById('displayEmail').textContent = `Email: ${email || ''}`;
}

// Add event listener to the form
document.getElementById('userForm').addEventListener('submit', Savedata);

// Display saved data on page load
window.onload = DisplayData;
