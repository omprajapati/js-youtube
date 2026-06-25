// const tinderUser = new Object(); // this is a SingleTon object creation
// const tinderUser = {}; // this is object literal

// console.log(tinderUser);

// tinderUser.id = "123abc";
// tinderUser.name = "salina";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// object inside object
// const regularUser = {
//   id: "123",
//   email: "salina@awal.com",
//   fullname: {
//     userFullName: {
//       firstName: "salina",
//       lastName: "awal",
//     },
//   },
// };

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstName);

// combining objects
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// // const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// console.log(returnedTarget);
// console.log(returnedTarget === target);

// using optional argument {} as target
// const source1 = { a: 1, b: 2 };
// const source2 = { b: 4, c: 5 };

// const returnedTarget = Object.assign({}, source1, source2); // now all changes will be in {} array

// console.log(source1);
// console.log(returnedTarget);
// console.log(returnedTarget === source1);

// using spread operator (...)
// if bothh objects have the same key, the value from the second object will overwrite the first
// const newObj = { ...source1, ...source2 };
// console.log(newObj);

// values from database is returned as Array of Objects
const users = [
  {
    id: 1,
    email: "one@gmail.com",
  },
  {
    id: 2,
    email: "two@gmail.com",
  },
  {
    id: 3,
    email: "three@gmail.com",
  },
];
// console.log(users);
// console.log(users[0].email); // 0 index based
// console.log(Object.keys(users));

const girl = {
  id: 123,
  name: "jeshmi",
  age: 14,
  isLoggedIn: false,
};

// console.log(Object.keys(girl));
// console.log(Object.values(girl));
// console.log(Object.entries(girl));

// check if a property is in object
// object.hasOwnProperty('propertyName');
// console.log(girl.hasOwnProperty("isLoggedIn")); // true
// console.log(girl.hasOwnProperty("isLoggedOut")); // false

// de-structuring
// const course = {
//   courseName: "JavaScript",
//   price: 999,
//   courseInstructor: "sanju",
// };
// console.log(course.courseInstructor);

// const { courseInstructor } = course;
// console.log(courseInstructor);
// const { courseInstructor: teacher } = course; // here "teacher" is user-defind name for easiness
// console.log(teacher);

// {
//     "name": "sanju",
//     "coursename": "javascript",
//     "price": "free"
// };

// json format
[
    {}, 
    {}, 
    {}
];
