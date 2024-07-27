class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    // Static method to get the total number of students
    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

const student1 = new Student('Samanvith', 25, 12345);
const student2 = new Student('Aditi', 30, 67890);

//  calling  the static method
console.log(Student.getStudentCount()); 

// Calling instance method to get the student ID of student1
console.log(student1.getStudentId()); 

// Calling instance method to get the student ID of student2
console.log(student2.getStudentId()); 

