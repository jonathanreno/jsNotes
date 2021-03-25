/*
    The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing.
*/

// Because of this, we need to make sure that our http status codes are correct

const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    if (!response.ok) {
      console.log("ERROR");

      response.json().then((data) => {
        for (char of data.characters) {
          console.log(char);
        }
      });
    }
  })
  .catch((err) => {
    console.log("err");
  });
