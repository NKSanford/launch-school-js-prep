// Retrieve a Value (Part 1)
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };
// console.log(student.courses);


// Retrieve a Value (Part 2)
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };
// console.log(jane.location.country);


// Add a Property
// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 5;
// fido["favorite food"] = "steak";
// console.log(fido);


// Greetings From Jane
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet(name) {
//     console.log(`Hej, ${name}!`);
//   }
// };

// jane.greet('Bobby'); // Hej, Bobby!


// Car Keys
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// let keys = Object.keys(vehicle);
// console.log(keys);


// Convert an object to a nested array
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let nestedPerson = Object.entries(person);
// console.log(nestedPerson);


// ...and vice versa
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let obj = Object.fromEntries(nestedArray);
// console.log(obj);


// Cloning a Person
function clone(obj) {
  let newObj = {};
  for (let property in obj) {
    newObj[property] = obj[property];
  }
  return newObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

