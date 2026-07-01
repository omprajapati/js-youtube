// reduce() function

// const array1 = [1, 2, 3, 4];
// result will be = 0 + 1 + 2 + 3 + 4
// const initialValue = 0;

// here accumulator is some temp variable
// current value is current value of an array from index 0 position
// initial value is a seeding. set it zero to add all elements of array
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

const myNums = [1, 2, 3];
// const myTotal = myNums.reduce((accumulator, currentValue) => {
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);
// in simple and less code way
// const myTotal = myNums.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );
// console.log(myTotal);

// real world example - total price of items in shopping cart
const shoppingCart = [
  {
    itemName: "Sanju",
    price: 5999,
  },
  {
    itemName: "Eliza",
    price: 2999,
  },
  {
    itemName: "Sriju",
    price: 999,
  },
  {
    itemName: "Prashamsa",
    price: 12999,
  },
];

// here "item" denotes each object of array
const priceToPay = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0,
);
console.log(priceToPay);
