class person{
    constructor(firstName, lastName, ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name){
        const[first, last] = name.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
}

const person1 = new person('Samanvith', 'Reddy');
person1.fullName="Yeravla SamanvithReddy";
console.log(person1.fullName); // Yeravla SamanvithReddy
