class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    gretting(){
        return(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
    updateage(newAge){
        this.age=newAge;
        console.log(`Updated age: ${this.age}`);

    }
   }
const person= new Person("Samanvith", 25)
person.updateage(27)
