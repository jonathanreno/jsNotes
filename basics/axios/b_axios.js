// AXIOS REQUEST CHAINING

const axios = require("axios").default;

// chaining on a 'then' method will then show our response.
x = axios.get("http://swapi.dev/api/planets/").then(({ data }) => {
  // console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  // second chain
  // 'next' is one of the keys in the data field of the api
  axios.get(data.next).then(({ data }) => {
    // console.log(data.results);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
});
