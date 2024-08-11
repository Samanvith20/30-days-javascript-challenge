const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const sessionStorage = require('node-sessionstorage');

// Function to save a value to both localStorage and sessionStorage
function saveToBothStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);
    console.log(`Saved to localStorage: ${key} = ${value}`);

    // Save to sessionStorage
    sessionStorage.setItem(key, value);
    console.log(`Saved to sessionStorage: ${key} = ${value}`);
}

// Function to retrieve values from both storages
function retrieveFromBothStorages(key) {
    // Retrieve from localStorage
    const localValue = localStorage.getItem(key);
    console.log(`Retrieved from localStorage: ${key} = ${localValue}`);

    // Retrieve from sessionStorage
    const sessionValue = sessionStorage.getItem(key);
    console.log(`Retrieved from sessionStorage: ${key} = ${sessionValue}`);
}

// Example usage
const key = 'exampleKey';
const value = 'exampleValue';

// Save the value to both storages
saveToBothStorages(key, value);

// Retrieve and log the values from both storages
retrieveFromBothStorages(key);
