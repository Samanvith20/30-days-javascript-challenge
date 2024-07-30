class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }
}

const reverseString = (str) => {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedStr = "";
    while (stack.items.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
};

console.log(reverseString("Hello")); 
