// let score = "33abc";

// console.log(typeof score);

// let valueInNumber = Number(score); // surely treat valueInNumber as number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // number but NaN, NaN is not a error, its a special type

// let newScore = null;
// // convert to number
// let nullCheck = Number(newScore);
// console.log(nullCheck); // 0

// console.log(Number(true)); // 1
// console.log(Number(false));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // false

// let isLoggedIn = "sanju";
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "sanju" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string
