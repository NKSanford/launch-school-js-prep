// Determine the individual digits of a 4-digit number (wihtout looping)
let num = 4936;
let onesPlace = num % 10;
num / 10;
let tensPlace = num % 10;
num / 10;
let hundredsPlace = num % 10;
num / 10;
let thousandsPlace = num % 10;

// Explicit coercion
console.log(Number('5') + 10);

// Template literals
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Array of names
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// Object of names and animal types
let pets = {
  asta: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
}