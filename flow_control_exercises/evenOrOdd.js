function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("number must be an integer");
    return;
  }
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

function capsLong(message) {
  if (message.length > 10) {
    return message.toUpperCase();
  }
  return message;
}

function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);