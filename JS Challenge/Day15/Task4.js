function greetUser(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}
 

const greetJohn = greetUser("Samanvith");
greetJohn(); 