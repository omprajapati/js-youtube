// for of is not applicable to objects
// for in

// for in - applying to object - objects are not iterable
const myObject = {
  sanju: 39,
  eliza: 32,
  nabina: 36,
  sriju: 38,
  prashamsa: 36,
};

// keys of object
for (const key in myObject) {
  //   console.log(key);
}

// values of object
for (const key in myObject) {
  //   console.log(myObject[key]);
}

// key value
for (const key in myObject) {
  //   console.log(`${key} has ${myObject[key]}`);
}

// for in - applying for array
const girls = ["sanju", "eliza", "nabina", "sriju", "prashamsa"];
for (const key in girls) {
  //   console.log(key); // gives index of each element
}

for (const key in girls) {
  //   console.log(`${girls[key]} is in position: ${key}`);
}

// for in - applying in map
// map = key value pair
const girlSizes = new Map();
girlSizes.set("sanju", 39);
girlSizes.set("jeshmi", 30);
girlSizes.set("kritika", 34);
girlSizes.set("salina", 36);
girlSizes.set("sriju", 38);

for (const key in girlSizes.keys()) {
  //   console.log(key); // will not display, map is also not iterable
}
