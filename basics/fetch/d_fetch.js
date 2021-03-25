const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((response) => {
    console.log("ERROR");
  });

// Now you will see that appending the .then method to the response.json(),
// you pass in the callback function and  get back the data
