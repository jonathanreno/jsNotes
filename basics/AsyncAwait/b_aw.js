const axios = require("axios").default;

const getData = () => {
  const data = axios.get("https://swapi.dev/api/planets/").then(({ data }) => {
    console.log(data); // this runs next
  });
  console.log(data); // this runs first
};

getData();

/*

the issue with the syntax of promises is that it requires too many '.then()' methods

AND that executes in a non-linear fasion (skipping from line 1-4, then back to line 2 after line 4 is run)

ASYNC/AWAIT fixes this syntax and makes it look cleaner

*/
