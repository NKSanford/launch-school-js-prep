// Sum
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(22, 10)); // 32


// Log Quote
// function brendanEichQuote() {
//   console.log("Always bet on JavaScript.");
// }

// brendanEichQuote();
// // logs:
// // Always bet on JavaScript.


// Cite the Author
// function cite(author, quote) {
//   console.log(`${author} said: "${quote}"`);
// }

// cite('Brendan Eich', 'Always bet on JavaScript.');
// // logs:
// // Brendan Eich said: "Always bet on JavaScript."


// Squared Number
// function squaredNumber(num) {
//   return num ** 2;
// }

// console.log(squaredNumber(3)); // 9


// Three-way comparison
// function compareByLength(str1, str2) {
//   let length1 = str1.length;
//   let length2 = str2.length;
//   if (length1 > length2) {
//     return 1;
//   } else if (length1 < length2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// console.log(compareByLength('patience', 'perseverance')); // -1
// console.log(compareByLength('strength', 'dignity'));      //  1
// console.log(compareByLength('humor', 'grace'));           //  0


// Transformation
// let str = "Captain Ruby";
// let newStr = str.replace("Ruby", "JavaScript");
// console.log(newStr);


// Internationalization 1
function greet(lang) {
  switch (lang) {
    case "en":
      return "Hi!";
    case "fr":
      return "Salut!";
    case "pt":
      return "Olá";
    case "de":
      return "Hallo!";
    case "sv":
      return "Hej!";
    case "af":
      return "Haai!";
  }
}

// console.log(greet('en')); // 'Hi!'
// console.log(greet('fr')); // 'Salut!'
// console.log(greet('pt')); // 'Olá!'
// console.log(greet('de')); // 'Hallo!'
// console.log(greet('sv')); // 'Hej!'
// console.log(greet('af')); // 'Haai!'


// Locale Part 1
function extractLanguage(locale) {
  return locale.substring(0,2);
}

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'


// Locale Part 2
function extractRegion(locale) {
  return locale.substring(3,5);
}

// console.log(extractRegion('en_US.UTF-8'));  // 'US'
// console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
// console.log(extractRegion('ko_KR.UTF-16')); // 'KR'


// Internationalization 2
function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);
  if (lang !== "en") {
    return greet(lang);
  } else {
    if (region === "US") {
      return "Hey!";
    } else if (region === "GB") {
      return "Hello!";
    } else if (region === "AU") {
      return "Howdy!";
    }
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'