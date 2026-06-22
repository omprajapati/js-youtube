const accountId = 144553;
let accountEmail = "omprajapati@gmail.com";
var accountPassword = "12345";
accountCity = "Bhaktapur";

// accountId = 2;   // not allowed for const

accountEmail = "someone@gmail.com";
accountPassword = "another_password";
accountCity = "Kathmandu";

console.log(accountId);

// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// scope
// {} // this is a scope (anu block of code with in curly braket is a scope)

// prefer not to use var because of issue in block scope and functional scope

let accountState;
// console.log(accountState); // will output - undefined (declared but value not assigned)
