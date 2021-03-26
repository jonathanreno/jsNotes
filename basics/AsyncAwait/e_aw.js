// AWAIT
const axios = require("axios").default;

// now consider this same program as in the previous file,  but with async/await code

const getPlanets = async () => {
  const response = await axios.get("https://swapi.dev/api/planets/");
  console.log(response.data);
  console.log("i happen third");
};

console.log("I happen first");
getPlanets();
