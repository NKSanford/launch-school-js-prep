let rlSync = require("readline-sync");
let firstName = rlSync.question("What is your first name? ");
let lastName = rlSync.question("what is your last name? ");
console.log(`Hello, ${firstName + " " + lastName}!`);