
const containsCharacters = (str, chars) => {
    //Method1
    if (str.includes(chars)) {
        return true;
    }

   //Method2
    for (let i = 0; i < str.length; i++) {
        if(str[i]===chars[i]){
            return true;
    }
    return true;
};
}

const str = "Hello, World!";
const chars = "Helo";
const result = containsCharacters(str, chars);
console.log(result); 
