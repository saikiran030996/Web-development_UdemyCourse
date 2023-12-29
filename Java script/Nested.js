
// password must be 6+ characters
const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password must not have spaces")
    }
} else {
    console.log("Password too short! Must be 6+ characters")
}


// password cannot include space

