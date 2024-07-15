function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
}

// Example usage
let age = 24;
checkVotingEligibility(age); // Output: You are eligible to vote
