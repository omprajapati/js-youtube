// if

// if (true) {
//   console.log("hello sanju");
// }

// if (false) {
//   console.log("hello salina");
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   console.log("kritika, you are just logged in.");
// }
// comparison operator
// <, >, <=, >=, ==, !=

// if (3 != 2) {
//   console.log("yes 3 is not equal to 2");
// }

// const temperature = 41;
// if (temperature < 50) {
//   console.log("temp less than 50");
// }
// // below statement is not dependent on above if statement
// // its a separate independent statement
// console.log("temp greater than or equal to 50");

// const temperature = 41;
// if (temperature === 41) {
//   console.log("temp less than 50");
// } else {
//   // now this statement is a part of and dependent on if statement
//   console.log("temp greater than or equal to 50");
// }
// // BUT below statement is not a part of above if statement
// console.log("This statement will execute in all conditions");

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// // console.log(`User power: ${power}`); // power is not defined, out of scope

// const balance = 1000;
// // implicit scope, scope within single line (without curly bracket)
// // if (balance > 500) console.log("yes, balance is greater than 500");
// // or for multiple lines
// if (balance > 500)
//   (console.log("yes, balance is greater than 500"), console.log("second line"));

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 700) {
//   console.log("less than 700");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// const isUserLoggedIn = true;
// const isDebtCard = true;
// if (isUserLoggedIn && isDebtCard && 2 == 3) {
//   console.log("you can proceed shopping");
// }

const isLoggedInFromGoogle = false;
const isLoggedInFromEmail = true;
if (isLoggedInFromGoogle || isLoggedInFromEmail) {
  console.log("User logged in");
}
