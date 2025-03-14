const readlineSync = require('readline-sync');

function isValidPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return false;
    }

    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        console.log("Password must contain at least one uppercase letter.");
        return false;
    }

    // Check if the password contains at least one number
    if (!/[0-9]/.test(password)) {
        console.log("Password must contain at least one number.");
        return false;
    }

    // If all conditions are met, return true
    return true;
}

let password;

do {
    password = readlineSync.question("Enter a password: ");
    if (!isValidPassword(password)) {
        console.log("Your password does not meet the requirements. Please try again.\n");
    }
} while (!isValidPassword(password));

console.log("Password accepted! You have been successful.");
