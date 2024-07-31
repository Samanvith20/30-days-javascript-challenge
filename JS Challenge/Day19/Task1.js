
// /.../: This indicates a regular expression.
// g: This is a flag that stands for "global," meaning the search will find all matches in the string, not just the first one.

function pattern(str){
    let word= /JavaScript/g;
    return str.match(word);
   
}

console.log(pattern("JavaScript is a great language. I am learning JavaScript.")); 