
function Captialletter(str){
    let regex= /[A-Z]/g;
    return str.match(regex);

}
console.log(Captialletter("My Name Is Y.Samanvith"));