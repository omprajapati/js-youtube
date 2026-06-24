// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date("2023, 0, 23");    // invalid date
// let myCreatedDate = new Date("2023-0-23"); // invalid date
//let myCreatedDate = new Date("2023, 1, 23"); // valid date
// let myCreatedDate = new Date("2023-1-23"); // valid date
// let myCreatedDate = new Date("1-23-2023"); // valid date
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now(); // in milli seconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // in milli seconds
// console.log(Date.now() / 1000); // seconds but with decimals
// console.log(Math.floor(Date.now() / 1000)); // seconds

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // start from jan as 0 index ( 12 months - from 0 to 11)
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); // week day
// console.log(
//   `Today is ${new Date()} and this month is: ${new Date().getMonth()}`,
// );

// unboxing Date object
const weekDay = new Date().toLocaleString("default", {
  weekday: "long",
  day: "2-digit",
  year: "numeric",
  timeZoneName: "longGeneric",
});

console.log(weekDay);
