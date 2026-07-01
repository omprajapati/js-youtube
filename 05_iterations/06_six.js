// const girls = ["sanju", "eliza", "prashamsa", "srijana", "poudel"];

// const values = girls.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// console.log(values); // undefined - forEach() doesnot returns value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filteredNumbers = myNumbers.filter((num) => num);

// let filteredNumbers = myNumbers.filter((num) => num > 4);

// let filteredNumbers = myNumbers.filter((num) => {
//   num > 4; // returns []. While using scope {}, return keyword is MOST
// });

// let filteredNumbers = myNumbers.filter((num) => {
//   return num > 4; // now this works fine
// });

// console.log(filteredNumbers);

// using forEach()
// const newNums = [];
// myNumbers.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// Realistic example. In real application, data from DB come as array of objects as below
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// here example: bk is an instance of a book, can be any name
//let userBooks = books.filter((bk) => bk.genre === "History");

// let userBooks = books.filter((bk) => {bk.publish > 2000}); // return [] as there is {} scope, either remove scope or use return key

// let userBooks = books.filter((bk) => bk.publish > 2000);

// let userBooks = books.filter((bk) => {
//   return bk.publish > 2000;
// });

// logical comparison - using &&
let userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
