
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const sessionStorage = require('node-sessionstorage');

// Function to clear all data from localStorage and sessionStorage
function clearAllStorages() {
    // Clear all data from localStorage
    localStorage.clear();
    console.log('localStorage cleared.');

    // Clear all data from sessionStorage
    sessionStorage.clear();
    console.log('sessionStorage cleared.');
}

// Function to verify that both storages are empty
function verifyStoragesAreEmpty() {
    // Check if localStorage is empty
    const isLocalStorageEmpty = localStorage.length === 0;
    console.log(`localStorage is empty: ${isLocalStorageEmpty}`);

    // Check if sessionStorage is empty
    const isSessionStorageEmpty = sessionStorage.length === 0;
    console.log(`sessionStorage is empty: ${isSessionStorageEmpty}`);

    // Log a message based on verification
    if (isLocalStorageEmpty && isSessionStorageEmpty) {
        console.log('Both storages are empty.');
    } else {
        console.log('Some storage still contains data.');
    }
}

// Example usage

// First, let's add some test data to both storages
localStorage.setItem('testKey', 'testValue');
sessionStorage.setItem('testKey', 'testValue');

// Verify storages contain data
console.log('Before clearing:');
verifyStoragesAreEmpty();

// Clear both storages
clearAllStorages();

// Verify that both storages are empty
console.log('After clearing:');
verifyStoragesAreEmpty();
