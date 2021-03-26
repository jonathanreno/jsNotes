// AWAIT

////////////////////////////////////

/*
    await can only be used inside of a function declared with 'async'

    await will pause the execution of the function, awaiting for a promise to be resolved
*/

const axios = require("axios").default;
// consider this code where we will use the 'then' method to return a promise
axios.get("https://swapi.dev.api/planets/").then((response) => {
  console.log(response);
});

// next page  --------->
