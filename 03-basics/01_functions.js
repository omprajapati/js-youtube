// function sayMyName() {
//   console.log("s");
//   console.log("a");
//   console.log("n");
//   console.log("j");
//   console.log("u");
// }
// // sayMyName();
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(); // returns NaN
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34 as "4" is a string
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null); // 3, as number2 is null
// addTwoNumbers(3, undefined); // NaN

// const result = addTwoNumbers(3, 5);
// console.log(result); // undefined, as addTwoNumber() function is not returning value

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//   //   let result = number1 + number2;
//   //   return result;
//   //   console.log("sanju"); // this will never print, as it is below "return"
//   return number1 + number2;
// }

// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

// function loginUserMessage(userName) {
//   return `${userName} just logged in.`;
// }

// console.log(loginUserMessage("sanju"));
// console.log(loginUserMessage()); // undefined

// function loginUserMessage(userName) {
//   if (userName === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${userName} just logged in.`;
// }

function loginUserMessage(userName = "jeshmi") {
  if (!userName) {
    // undefined is boolean false. equivalant to above
    console.log("Please enter a username");
    return;
  }
  return `${userName} just logged in.`;
}

// console.log(loginUserMessage("sanju"));
// console.log(loginUserMessage()); // jeshmi just logged in.

// rest operator (...)
// rest and spread operator (...) are same but used differently
// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));

// function calculateCartPrice(val1, val2, ...num1) {
//   //return num1;
//   console.log(`val1: ${val1}, val2: ${val2}, val3: ${num1}`);
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000));
// calculateCartPrice(200, 400, 500, 2000);

// const user = {
//   username: "kritika",
//   price: 199,
// };

// // anyobject can be "user" or any object
// function handleObject(anyobject) {
//   // we should type check to avoid undefined
//   console.log(
//     `username is ${anyobject.username} and price is ${anyobject.price}`,
//   );
// }
// // handleObject(user);

// // creating object inside calling function itself.
// handleObject({
//   username: "salina",
//   price: 36,
// });

// passing array to function
const myNewArray = [30, 34, 36, 39];

function returnArrayFunction(getArray) {
  return getArray[0]; // returns 30
}

// console.log(returnArrayFunction(myNewArray));
// creating array inside calling function itself
console.log(returnArrayFunction([30, 34, 36, 39]));
