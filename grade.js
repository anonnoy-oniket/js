const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

rl.question("Enter your marks: ", (marks) => {
    const grade = getGrade(Number(marks));
    console.log(`Your grade is ${grade}`);
    rl.close();
});
