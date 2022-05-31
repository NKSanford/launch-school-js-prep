// 3
// let myArray = {
//   0: 6,
//   1: 4,
//   2: 7,
//   length: 3,
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// 4
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let array = Object.keys(obj);
// let capitalizedArray = [];
// array.forEach(function(element) {
//   capitalizedArray.push(element.toUpperCase());
// });
// console.log(capitalizedArray);

// 5
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// let myObj = Object.create(myProtoObj);

// 6
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
// let myObj = Object.create(myProtoObj);
// myObj["qux"] = 3;

// 8
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(obj, copyKeysArray = Object.keys(obj)) {
//   let newObj = {};
//   copyKeysArray.forEach(function(element) {
//     if (obj.hasOwnProperty(element)) {
//       newObj[element] = obj[element];
//     }
//   });
//   return newObj;
// }

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// 11
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

// Replace 6 with 606
obj["bar"][3]["xyz"] = 606;
console.log(obj);
