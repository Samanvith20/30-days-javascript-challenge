
// "/d" is used to match an digit in string

function  Matchdigits(str){
    let regex= /\d/g;
    return str.match(regex);
}

console.log(Matchdigits("I have 2 apples and 3 pineapples.")); 