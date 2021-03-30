// SEQUENTIAL VS PARELLEL REQUESTS
const { default: axios } = require("axios");
// some request depend on the previous request to finish before they can be made
// this is when SEQUENTIAL requests are necessary
const get3planets = async () => {
  try {
    const p1 = await axios.get("https://swapi.dev/api/planets/1");
    console.log(p1);
    const p2 = await axios.get("p1.data.residents[0]");
  } catch (e) {
    console.log(e);
  }
};

get3planets();

// some requests that do NOT depend on one another do not need and should
// NOT be sequential, but should be parrallel
// like so...

const get3MorePlanets = async () => {
  try {
    const c1 = axios.get("https://swapi.dev/api/planets/1");
    const c2 = axios.get("https://swapi.dev/api/planets/2");
    const c3 = axios.get("https://swapi.dev/api/planets/3");
    await c1;
    await c2;
    await c3;
    console.log(c1);
    console.log(c2);
    console.log(c3);
  } catch (e) {
    console.log(e);
  }
};

// c1, c2 and c3 are not waiting on the last request to perform their own request
