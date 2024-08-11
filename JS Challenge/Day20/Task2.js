const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const script={name:"Samanvith",Location:"Hyderabad"}
localStorage.setItem("MyObject",JSON.stringify(script))
// console.log(JSON.stringify(script));
// JSON.stringify is used to convert from object to string

 const retrivedObject=JSON.parse(localStorage.getItem("MyObject"))
//  console.log(localStorage.getItem("MyObject"));
   // JSON.Parse is used to convert from string to  object
 
 console.log(retrivedObject);
 