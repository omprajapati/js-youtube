// const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
// const dc_heros = ["SuperMan", "Flash", "BatMan"];

// marvel_heros.push(dc_heros); // insert dc array inside marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc_heros);  // returns new array
// console.log(all_heros);

// spread operator (...)
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);
// console.log(another_array.flat(Infinity)); // flattern to infinity depth

// console.log(Array.isArray("Sanju")); // false, no its a string, not an array
//console.log(Array.from("Sanju"));
// const myNewArray = Array.from("Sanju"); // create an array from string or convert string to an array
// console.log(myNewArray);
// console.log(typeof myNewArray);
// console.log(myNewArray instanceof Array); // true

// const arrayFromObject = Array.from({ name: "Sanju" }); // returns [] empty array
// console.log(arrayFromObject); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

const numericArray = Array.of(score1, score2, score3);
console.log(numericArray);

