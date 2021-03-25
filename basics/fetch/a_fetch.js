const fetch = require("node-fetch");

/**
 * Fetch is a newer way than xmkhttprequest to make http requests
 *
 * it supports promises. (see promises and its syntax)
 *
 * not supported in IE
 * 
 * 
  It returns a Promise that resolves to the Response to that request, whether it is successful or not.
 */

/*
    Before using fetch in node js, you first need to m

    'npm install node-fetch --save' in termianl 
            and
    'const fetch = require("node-fetch")' in text-editor
*/
// Making a request with fetch
const makeRequest = fetch("http://swapi.dev/api/films/1/");
console.log(makeRequest); // output = Promise { <pending> }

// youll notice, just like when using promises, that fetch uses promises..
// when a request is made, the promise is pending
