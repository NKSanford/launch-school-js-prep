// First Element
// function first(array) {
//   return array[0];
// }
// console.log(first(["Earth", "Moon", "Mars"]));


// Last Element
// function last(array) {
//   return array[array.length - 1];
// }
// console.log(last(["Earth", "Moon", "Mars"]));


// Add + Delete
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.shift();
// energy.push("geothermal");
// console.log(energy);


// Alphabet
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// console.log(alphabet.split(""));


// Filter
// let scores = [96, 47, 113, 89, 100, 102];
// console.log(scores.filter(score => score >= 100).length);


// Vocabulary
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// for (let i = 0; i < vocabulary.length; i++) {
//   for (let j = 0; j < vocabulary[i].length; j++) {
//     console.log(vocabulary[i][j]);
//   }
// }


// Travel
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// function contains(str, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (str === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false


// Passcode
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// console.log(passcode.join("-"));
// // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'


// Checking items off the grocery list
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

console.log(groceryList); // []
