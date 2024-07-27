class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    gretting(){
        return(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
   
   } 
const person= new Person("Samanvith", 25)
console.log(person.gretting());