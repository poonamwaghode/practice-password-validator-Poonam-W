const readlineSync = require("readline-sync");

function isValidPassword(password) {
  // Check if the password is at least 8 characters long
  const isLongEnough = password.length >= 8;
  
  // Check if the password contains at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  
  // Check if the password contains at least one number
  const hasNumber = /\d/.test(password);
  
  // Return true if all conditions are met
  return isLongEnough && hasUppercase && hasNumber;
}

let password;
do {
  // Prompt the user to enter a password
  password = readlineSync.question("Enter your password: ");
  
  if (!isValidPassword(password)) {
    console.log("Your password does not meet the requirements. Please try again.");
  }
} while (!isValidPassword(password));

console.log("Congratulations! Your password is valid.");
