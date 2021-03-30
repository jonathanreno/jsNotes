// ERROR HANDLING IN ASYNC FUNCTIONS

const { default: axios } = require("axios");

const getPlanets = async () => {
  const res = await axios.get("https://swapi.dev/api/planets");
  console.log(res.data);
};

getPlanets();

// everything goes smoothly when there is no error
