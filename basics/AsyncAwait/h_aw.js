// ASYNC ERROR HANDLING IN FUNCTIONS
const { default: axios } = require("axios");
// a better and cleaner way to handle async errors is using a try and catch block

const getPlanets = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/plllanets");
    console.log(res.data);
  } catch (e) {
    console.log("ERROR!!!!!!:", e);
    const res = await axios.get("https://swapi.dev/api/planets");
    console.log(res.data);
  }
};

getPlanets();
