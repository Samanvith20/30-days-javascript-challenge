
const sessionStorage = require('node-sessionstorage');

sessionStorage.setItem("email" ,"Samanvith2002@gmail.com")
console.log("Before removal",sessionStorage.getItem("email"));
sessionStorage.removeItem("email")
console.log("After removal",sessionStorage.getItem("email"));
