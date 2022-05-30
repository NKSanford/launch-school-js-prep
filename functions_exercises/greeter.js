let rlSync = require("readline-sync");

function getName(message) {
  return rlSync.question(message);
}

let firstName = getName("What is your first name? ");
let lastName = getName("what is your last name? ");

console.log(`Hello, ${firstName + " " + lastName}!`);