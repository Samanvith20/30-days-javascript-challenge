class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    get FullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

const person1 = new person('Samanvith', 'Reddy');
console.log(person1.FullName); 