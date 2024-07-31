
function matchsequencedigits(str){
    let regex= /\d+/g;
    return str.match(regex);

}
console.log(matchsequencedigits("I have 120 apples and 300 pineapples."));