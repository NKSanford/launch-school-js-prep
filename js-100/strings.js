// ALL CAPS
// let str = "confetti floating everywhere";
// console.log(str.toUpperCase());


// Repeat
// function repeat(num, str) {
//   let newStr = "";
//   for (let i = 0; i < num; i++) {
//     newStr += str;
//   }
//   return newStr;
// }
// console.log(repeat(3, "ha"));


// Case-insensitive Equality
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// let str1Lower = string1.toLowerCase();
// let str2Lower = string2.toLowerCase();
// let str3Lower = string3.toLowerCase();
// // Now compare for strict equality


// Contains Character
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.includes("x"));


// Blank? Version 1
// function isBlank(str) {
//   return (!str);
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true


// Blank? Version 2
// function isBlank(str) {
//   let regex = /\S/;
//   return !regex.test(str);
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true
// console.log(isBlank(''));     // true


// Capitalize Words
let str = "launch school tech & talk";
let strArray = str.split(" ");
for (let i = 0; i < strArray.length; i++) {
  let word = strArray[i];
  let newWord = word.charAt(0).toUpperCase() + word.substring(1);
  strArray[i] = newWord;
}
let newArray = strArray.join(" ");
console.log(newArray);