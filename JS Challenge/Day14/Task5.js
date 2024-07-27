
// this Keyword: Refers to the current instance of the class.
// A specific object created from a class, with its own unique values for the properties defined by the class.
// example:const person1 = new Person("Samanvith", 25);
//const person2 = new Person("Aditi", 30);


// Static (static):  Static methods are called on the class itself, not on an instance of the class.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreet() {
        return 'Hello, this is a generic greeting!';
    }
}

console.log(Person.genericGreet());
 