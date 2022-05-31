// 3
// console.log(Math.sqrt(37));


// 4
// let arr1 = [1, 6, 3, 2];
// let arr2 = [-1, -6, -3, -2];
// let arr3 = [2, 2];

// console.log(Math.max(...arr1));
// console.log(Math.max(...arr2));
// console.log(Math.max(...arr3));


// 6
// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// function allMatches(words, regex) {
//   let result = [];
//   words.forEach(function(word) {
//     if (regex.test(word)) {
//       result.push(word);
//     }
//   });
//   return result;
// }

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate'];


// 8
// This works because NaN is the only value to not be equal to itself in javascript
// function isNotANumber(value) {
//   return value !== value;
// }


// 9
function isNegativeZero(num) {
  return 1 / num === -Infinity;
}

let value1 = -0;
let value2 = 0;
console.log(isNegativeZero(value1));
console.log(isNegativeZero(value2));
