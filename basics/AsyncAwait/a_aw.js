/*
ASYNC/AWAIT 
is a special syntax to work with promises in a more comfortable fashion


requires no '.then()' methods to be coded in
*/

const axios = require("axios").default;

// consider this piece of code
const getData = () => {
  const data = axios.get("https://swapi.dev/api/planets/");
  console.log(data);
};

getData(); // output = Promise { <pending> }

// once again, we see that it returns a promise
