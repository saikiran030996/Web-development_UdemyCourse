// And operator "&&"

// true && true - true
// true && false - false  
// false && false - false
// false && true - false


// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid password!")
// } else {
//     console.log("Incorrect format for password")
// }


// Or operator "||"

// true || true - true
// true || false - true
// false || false - false
// false || true - true

// const age = -10;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("Free")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age!")
// }


// logical Not

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("Try again!")
// }

// switch operator

const day = 6;
switch (day) {

    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default: {
        console.log("I dont know that")
    }
}