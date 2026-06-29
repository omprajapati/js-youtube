// const userEmail = "sanju@mail.com";  // Got usr email
// const userEmail = ""; // Don't have user email
// const userEmail = []; // Got user email
// const userEmail = -0; // Don't have user email

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function () {}

// const userEmail = "";

// if (userEmail.length === 0) {
//   console.log("user email is empty");
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// NULLish Coalescing Operator (??): for null undefined values
// let value1;
// value1 = 5 ?? 10; // 5 will assign
// value1 = null ?? 10; // 10 will assign
// value1 = undefined ?? 10; // 10 will assign
// value1 = null ?? 10 ?? 20; // 10 will assign
// console.log(value1);

// ternary operator (?)
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("YES, price is <= 80")
  : console.log("NO, price is > 80");
