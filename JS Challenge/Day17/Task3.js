class stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length==0){
            return "Underflow"
        }
        return this.items.pop()
    }
    top(){
        if(this.items.length==0){
            return "No element in stack"
        }
        return this.items[this.items.length-1]
    }
}

const stack1=new stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
console.log(stack1.top())
console.log(stack1.pop())