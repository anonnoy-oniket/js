const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a year: ", (inp) => {
    const year = parseInt(inp.trim());
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
    rl.close();
});
