// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 400.00

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3)); // 23.9

// const newNumber = 123.8966;
// console.log(newNumber.toPrecision(3)); // 124

// const nextNewNumber = 1123.8966;
// console.log(nextNewNumber.toPrecision(3)); // 1.12e+3

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // localization

// ++++++++++++++++ Maths ++++++++++++++++++++
// console.log(Math); // displays Math object
// console.log(Math.abs(-4)); // abs - absolute - positive value
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5

// console.log(Math.ceil(4.3)); // 5
// console.log(Math.ceil(4.6)); // 5

// console.log(Math.floor(4.3)); // 4
// console.log(Math.floor(4.6)); // 4

// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.max(1, 2, 3, 4, 5)); // 5

// console.log(Math.random()); // between 0 and 1 (1 is exclusive)
// console.log(Math.random() * 10 + 1);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
