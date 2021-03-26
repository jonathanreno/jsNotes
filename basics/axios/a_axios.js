/*
Axios simplifies the process for making http requests.

behind the scenes, it ses fetch.

*/

// to use axios, 'npm install axios' and then the require statement
const axios = require("axios").default;

x = axios.get("http://swapi.dev/api/planets/");
console.log(x);
// we see when logging x, that axios requests return a promise
