// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`${element} is the best number.`);
//   }
//   console.log(element);
// }
// console.log(element); // ERROR: out of scope, element is not defined

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
//     // now display the multiplication table
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// let myArray = ["sanju", "jeshmi", "salina", "kritika"];
// const myArrayLength = myArray.length;
// // there not "out of bound exception in JavaScript = so it throws undefined only"
// console.log(myArrayLength);
// for (let index = 0; index < myArrayLength; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// break and continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`DETECTED: ${index}`);
//     break; // breaks a loop / move control out of for loop
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`DETECTED: ${index}`);
    continue; // skips the current iteration and continue remaining
    // value of i is 5 - will not be printed
  }
  console.log(`Value of i is ${index}`);
}
