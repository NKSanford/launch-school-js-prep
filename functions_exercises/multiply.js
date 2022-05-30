function multiply(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

function getNum(message) {
  let readLineSync = require("readline-sync");
  return readLineSync.question(message);
}

let num1 = getNum("Enter the first number: ");
let num2 = getNum("Enter the second number: ");
multiply(num1, num2);