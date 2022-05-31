// 2
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 === 0) {
//     console.log(myArray[i]);
//   }
// }


// 3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j++) {
//     if (myArray[i][j] % 2 === 0) {
//       console.log(myArray[i][j]);
//     }
//   }
// }


// 4
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4,
//   9, 17, 16, 0,
// ];

// let evensArray = myArray.map(num => (num % 2 === 0) ? true : false);
// console.log(evensArray);

// 5
// function findIntegers(things) {
//   let intArray = things.filter(thing => Number.isInteger(thing));
//   return intArray;
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
// 6
// function oddLengths(arr) {
//   let arrLengths = arr.map(elem => elem.length);
//   let oddLengths = arrLengths.filter(elem => (elem % 2 === 1));
//   return oddLengths;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// 7
// function sumOfSquares(array) {
//   let initialValue = 0;
//   return array.reduce((previousValue, currentValue) => previousValue + currentValue * currentValue, initialValue);
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// 8
// function oddLengths(arr) {
//   let oddLengths = arr.reduce(function(accumulator, element) {
//     if (element.length % 2 === 1) {
//       accumulator.push(element.length);
//     }
//     return accumulator;
//   }, []);
//   return oddLengths;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// 9
// function checkForThree(array) {
//   return array.includes(3);
// }

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(checkForThree(numbers1));
// console.log(checkForThree(numbers2));
// console.log(checkForThree(numbers3));

// 10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr);

