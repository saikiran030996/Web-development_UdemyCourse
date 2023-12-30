const prompt = require("prompt-sync")();
// const secret = "BabyHippo";

// let guess = prompt("enter the secret code....");
// while (guess !== secret) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats you got the secret right!!!")


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok you win!!!")


for (let i = 0; i < 10000; i++) {
    console.log(i);
    if (i === 100) break;
}