function getGrade(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        case score >= 50:
            grade = 'E';
            break;
        default:
            grade = 'F';
            break;
    }

    return grade;
}


let score = 85;
let result = getGrade(score);
console.log(`For a score of ${score}, the grade is: ${result}`);
 // Output: For a score of 85, the grade is: B
