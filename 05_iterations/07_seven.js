// map() method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

// const newNums = myNumbers.map((num) => {
//   return num + 10;
// });

// console.log(newNums);

// chaining of functions
// example: myNumbers.map().map.filter().....
// second function in chain works on the result array of the first function
// this is why it is called chaining
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 41);

console.log(newNums);
