const containsCharacters = (str, chars) => {
    //Method1
    if (str.includes(chars)) {
        return true;
    }

   //Method2
    for (let i = 0; i < chars.length; i++) {
        if (!str.includes(chars[i])) {
            return false;
        }
    }
    return true;
};

const str = "Hello, World!";
const chars = "Helo";
const result = containsCharacters(str, chars);
console.log(result); 
