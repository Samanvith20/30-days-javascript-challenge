// Import the node-sessionstorage module
const sessionStorage = require('node-sessionstorage');

sessionStorage.setItem("name","Samanvith")
const sessionvalue=sessionStorage.getItem("name")
console.log(sessionvalue);
