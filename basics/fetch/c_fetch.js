const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    console.log("SUCCESS", response.json());
  })
  .catch((response) => {
    console.log("ERROR");
  });

/*
  Since a readableStream COULD take a while, the method to use is body.json()

  BUT body.json only returns a promise, BECAUSE of the fact that the readableStream could take a long time.

  logging response.json(), its output will be...

  Promise { <pending> }

  */

// This means that to get the data, you have to append another '.then' to the response.json() method itself

// ...next page --->
