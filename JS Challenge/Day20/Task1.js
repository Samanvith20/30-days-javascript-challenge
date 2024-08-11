// Import and setup localStorage
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

// Define the key and value
const key = "string";
const valueToSave = "helloworld";

// Save to localStorage
localStorage.setItem(key, valueToSave);

// Retrieve from localStorage
console.log(localStorage.getItem(key));


// localStorage: Suitable for storing data that should persist across sessions, such as user preferences, settings, or offline application data.
// sessionStorage: Useful for storing temporary data that only needs to be available while the tab is open, such as a form's state or a single-page application's session data.



//localStorage: Data stored in localStorage persists even after the browser or tab is closed. It remains available until explicitly deleted by the user or through code.
//sessionStorage: Data stored in sessionStorage is only available for the duration of the page session. Once the tab or browser is closed, the data is automatically cleared.