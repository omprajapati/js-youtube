const girls = ["chetana", "sabnam", "niru", "neha", "reeti", "jeshmi"];

// girls.forEach(function(){}) // that function is callback function
girls.forEach(function (val) {
  //   console.log(val);
});

// using arrow function in for each
// girls.forEach(() => {});

// girls.forEach((val) => {
//   console.log(val);
// });

// using function() itself as callback
// function printName(name) {
//   console.log(name);
// }

// girls.forEach(printName); // have to pass function name only without paranthesis

// detail parameters in forEach()
// girls.forEach((item, index, arr) => {
//   // console.log(item, index, arr);
//   console.log(`${item} is in position ${index} of an array ${arr}`);
// });

// forEach() - applying to array of objects

const girlsArray = [
  {
    initials: "ss",
    fullName: "Sanju Sedhai",
  },
  {
    initials: "eg",
    fullName: "Eliza Gautam",
  },
  {
    initials: "pp",
    fullName: "Prashamsa Pokharel",
  },
  {
    initials: "sg",
    fullName: "Srijana Ghimire",
  },
];

girlsArray.forEach((item) => {
  console.log(item.initials + " - " + item.fullName);
});
