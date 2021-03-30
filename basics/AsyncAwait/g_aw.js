// ERROR HANDLING IN ASYNC FUNCTIONS

const { default: axios } = require("axios");

const getPlanets = async () => {
  const res = await axios.get("https://swapi.dev/api/plllanets");
  console.log(res.data);
};

// one way to handle errors is...
getPlanets().catch((err) => {
  console.log("ERROR");
  console.log("------------");
  console.log(err);
});
