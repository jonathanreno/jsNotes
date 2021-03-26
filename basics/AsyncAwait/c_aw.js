const axios = require("axios").default;

// ASYNC FUNCTIONS//
/////////////////////////

// ASYNC functions ALWAYS return a promise
// If a function returns a value, the promise will be reolved with that value
// if the function throws an exception, the promise will be rejected

// consider this normal function
const greet = () => {
  return "HELLO";
};

console.log(greet()); // output = "HELLO"
// nothing new here

// consider this async function
const sayHi = async () => {
  return "HEYYYY";
};

console.log(sayHi());
// output = Promise { 'HEYYYY' }
// the function returns a promise and is resolved WITH the value that the function returns

/////////////////////////////////////////////////////////////////////////////////////////////
// another example
const add = async (x, y) => {
  return x + y;
};

console.log(add(5, 7)); // output = Promise { 12 }

/////////////////////////////////////////////////////////////////////////////////////////////
/*
    So, instead of acting like a normal function and returning either a value or error, 
    an async function returns a promise WITH the value or error
*/
