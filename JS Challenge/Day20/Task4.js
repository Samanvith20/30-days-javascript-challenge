const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

localStorage.setItem("name", "Samanvith")
console.log('Before removal:', localStorage.getItem('name'));

localStorage.removeItem('name');
console.log('After removal:', localStorage.getItem('name'));