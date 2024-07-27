
// Constructor (constructor): Initializes object properties when an instance is created.

// Super (super): Calls the constructor of the parent class to initialize inherited properties.

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    gretting(){
        return(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
   
   } 
   class student extends Person{
       constructor(name,age,studentId){
           super(name,age);
           this.studentId=studentId;
       }
       getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}
const student1= new student("Samanvith", 25, 12345)
console.log(student1.getStudentId());