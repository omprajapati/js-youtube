// high order array loops
// for of

// arrays frame
// ["", "", ""]; // array of strings
// [{}, {}, {}]; // array of objects

const arrayOfSizes = [32, 34, 36, 39, 40];
for (const size of arrayOfSizes) {
  //   console.log(size);
}

const names = ["sanju", "kritika", "jeshmi", "salina"];
for (const name of names) {
  //   console.log(`Name of girl: ${name}`);
}

const name = "eliza";
for (const char of name) {
  //   console.log(`Each char is ${char}`);
}

// map = key value pair
const girlSizes = new Map();
girlSizes.set("sanju", 39);
girlSizes.set("jeshmi", 30);
girlSizes.set("kritika", 34);
girlSizes.set("salina", 36);
girlSizes.set("sriju", 38);

// add duplicate key
// map doesnot keep duplicate keys but values will be updated by later
// girlSizes.set("salina", 38);
// girlSizes.set("sanju", 31);

// console.log(girlSizes);
// for (const [key, value] of girlSizes) {
//   console.log(key + " : " + value);
// }

for (const [girl, size] of girlSizes) {
  //console.log(`Size of ${girl} is ${size}`);
}

// for of - applying to object - objects are not iterable
const myObject = {
  sanju: 39,
  eliza: 32,
  nabina: 36,
};

// for (const girl of myObject) {
//   console.log(girl); // error, for of is not applicable to objects
// }
