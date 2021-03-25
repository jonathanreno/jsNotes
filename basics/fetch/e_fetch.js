/**
 * We can work on getting an array of data in the characters body
 */

const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    response.json().then((data) => {
      // console.log(data);
      for (char of data.characters) {
        console.log(char);
      }
    });
  })
  .catch((response) => {
    console.log("ERROR");
  });
