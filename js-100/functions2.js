// Greet 1
// function greet(greeting = "Hello") {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); 
// greet();
// greet(undefined);


// Greet 2
// function greet(greeting = "Hello", recipient = "world") {
//   console.log(`${greeting}, ${recipient}!`);
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// Greet 3
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`);
// }

// greet();


// Calculate BMI
// function calculateBMI(heightCentimeters, weightKilograms) {
//   let heightMeters = heightCentimeters / 100;
//   return (weightKilograms / heightMeters ** 2).toFixed(2);
// }

// console.log(calculateBMI(180, 80));


// Calculate Cat Age
// function catAge(humanAge) {
//   let catAge = 0;
//   if (humanAge > 0) {
//     catAge += 15;
//   }
//   if (humanAge > 1) {
//     catAge += 9;
//   }
//   if (humanAge > 2) {
//     catAge += (humanAge - 2) * 4;
//   }
//   return catAge;
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32


// Remove Last Char
// function removeLastChar(str) {
//   return str.substring(0, str.length - 1);
// }

// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'


// Arrow Functions Part 1
// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

// console.log(sentence('like', 'birds'));


// Arrow Functions Part 2
// let initGame = () => ({level: 1, score: 0});

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);
