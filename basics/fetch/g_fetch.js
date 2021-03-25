/**
 * '
 * with the error statement inside the conditional, you can 'throw' whatever response that error will/would be over to the 'catch' method.
 *
 * that way, if there is an error, the 'catch' method will technically be called
 *
 */

const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    // check response status
    if (!response.ok) {
      // console.log("ERROR");
      throw new Error(` STATUS: ${response.status}`);
    } else {
      response.json().then((data) => {
        for (char of data.characters) {
          console.log(char);
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
