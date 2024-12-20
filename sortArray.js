const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the array: ", (inp) => {
    const array = inp.split(" ").map(Number);
    const sorted = array.sort((a,b)=> a-b);
    console.log(sorted);
    rl.close();
});

