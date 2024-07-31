function matchEndofstring(str,word){
 
    let regex = new RegExp(word + "$");
    return str.match(regex) ? true : false;
}
console.log(matchEndofstring("Hello, World!","World!")); 