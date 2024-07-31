
function MatchstartofString(str,word){
    let regex = new RegExp("^"+word);
    return str.match(regex);
}
console.log(MatchstartofString("Hello World","Hello"));