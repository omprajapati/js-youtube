// singleton
// object declared by using constructor => singleton
// not by using object literal
// Object.create()  // object constructor

// object literals (key: value pair)

const mySym = Symbol("myValue"); // create a Symbol

const JsUser = {
  name: "Sanju",
  "full name": "sanju prajapati",
  [mySym]: 393237,
  age: 36,
  localtion: "New Zealand",
  email: "sanju@mail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(typeof JsUser.name); // string

// accessing object elements
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.full name);    // not allowed
// console.log(JsUser."full name");    // not allowed
// console.log(JsUser["full name"]);

// const mySymbol = Symbol("key123"); // create a symbol, this makes any object unique
// console.log(mySymbol);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);

// change the value of object element
// JsUser.email = "sanju@googlemail.com";
// console.log(JsUser.email);

// freeze (lock) the object so the value of properties cannot be change
// Object.freeze(JsUser);
// JsUser.email = "sanju@anothermail.com"; // will not propogate (or will not change)
// console.log(JsUser.email);
// console.log(JsUser);

// JsUser.greeting = function () {
//   return "Hello JS User!";   // this will not output "undefined"
// };

JsUser.greeting = function () {
  console.log("Hello JS User!");
};

// console.log(JsUser.greeting); // returns function declaration
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(
    `Hello JS User ${this["full name"]} and you are ${this.age} years old.`,
  ); // ` ` this is a string interpolation
};
console.log(JsUser.greetingTwo());
