// Data Types

// Primitive Type
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail = undefined;
// let email; // this is same as above "undefined"

// const id = Symbol("123");
// const anotherId = Symbol("123");
// id and anotherId is not same or equal even value of both are same
// this is what Symbol is used for, making data very unique

// console.log(id === anotherId); // false

// const bigNumber = 222223333355555544444466666888888n; // bigint
// console.log(typeof bigNumber);

// Reference Type - Non Primitive Type
// Array, Objects, Function

// array
// const heros = ["shaktiman", "naagraj", "dooga"];
// console.log(typeof heros); // objects
// console.log(heros instanceof Array); // true

// object
// let myObj = {
//   name: "sanju",
//   age: 36,
// };
// console.log(typeof myObj); // object
// console.log(myObj instanceof Object); // true

// function - type "Function Object"
// const myFunction = function () {
//   return "hello sanju";
// };
// console.log(typeof myFunction); // object
// console.log(myFunction instanceof Function); // true

// Memory
// Stack (Primitive) => Copy of original
// Heap (Non Primitive)

let myYoutubeName = "sanju@youtube";
console.log(myYoutubeName);

let anotherName = myYoutubeName; // this gives a copy of myYoutubeName
console.log(anotherName);

anotherName = "myAnotherChannel"; // only changes copy, not a original myYoutubeName

console.log(myYoutubeName);
console.log(anotherName); // so the results are different
