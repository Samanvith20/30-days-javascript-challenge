
function Validparenthesis(str){
    let stack=[]
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let key of str){
        if(map[key]){
            stack.push(key)
        }
        else if (stack.length === 0 || map[stack.pop()] !== char) {
            return false;
    }
      return true
}
}

console.log(Validparenthesis("()")); // true
console.log(Validparenthesis("()[]{}")); // true
console.log(Validparenthesis("(]")); // false
