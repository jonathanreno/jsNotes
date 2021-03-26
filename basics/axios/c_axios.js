// CLEANER AXIOS REQUEST CHAINING

const axios = require("axios").default;

// chaining on a 'then' method will then show our response.
x = axios
  .get("http://swapi.dev/api/planets/")
  .then(({ data }) => {
    // console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  // second chain
  .then(({ data }) => {
    // console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  // third chain
  .then(({ data }) => {
    // console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  // fourth chain
  .then(({ data }) => {
    // console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  // fifth chain
  .then(({ data }) => {
    // console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  });
