class Account{
    #balance;
    constructor(initilaBalance){
        this.#balance = initilaBalance;
    }
    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        }
    }

    getBalance(){
        return this.#balance;
    }



}

// Creating an instance and testing the deposit and withdraw methods
const myAccount = new Account(1000);

myAccount.deposit(500);
console.log(myAccount.getBalance()); 

myAccount.withdraw(200);
console.log(myAccount.getBalance()); 

myAccount.withdraw(1500); 
console.log(myAccount.getBalance()); 
