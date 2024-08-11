const sessionStorage = require('node-sessionstorage');

let object={
    name:"Samanvith",
    Location:"Hyderabad"
}
sessionStorage.setItem("MyObject",JSON.stringify(object))
const retrivedObject=JSON.parse(sessionStorage.getItem("MyObject"))
console.log(retrivedObject);
