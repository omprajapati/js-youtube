// arrays

// const myArr = [0, 1, 2, 3, 4, 5, "sanju", true];
const myArr = [0, 1, 2, 3, 4, 5]; // zero index based
// console.log(myArr[0]);

// const myGirls = new Array("sanju", "jeshmi", "salina", "kritika");
// console.log(myGirls[2]);

// Array Methods
// myArr.push(66); // adds or appends 66
// myArr.push(77);
// const lastItem = myArr.pop(); // removes last item
// console.log(`Popped out: ${lastItem}`);

// myArr.unshift(36); // insert 36 at first index and shifts other items to next index
// console.log(myArr[0]);

// myArr.shift(); // removes first item or item at index 0

// console.log(myArr.includes(9)); // check  if item is in array
// console.log(myArr.indexOf(3)); // checks the index position of array item => -1 for false

// const newArr = myArr.join(); // returns string containing all elemets of an array joined by comma

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr); // string

// SLICE
console.log("A ", myArr);
const myN1 = myArr.slice(1, 3);
console.log(myN1);
console.log("B ", myArr);

// SPLICE
const myN2 = myArr.splice(1, 3); // inclusive last index (3)
console.log("C ", myArr); // changes original array
console.log(myN2);
