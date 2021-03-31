// prmoise.all() methods takes in an ARRAY OF PROMISES

// consider this code making multiple requests thats return promises

/*


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

*/

// a better and cleaner way to write it is usind prmise.all method

const { default: axios } = require("axios");

const get3MorePlanets = async () => {
  try {
    const promiseOne = axios.get("https://swapi.dev/api/planets/1");
    const promiseTwo = axios.get("https://swapi.dev/api/planets/2");
    const promiseThree = axios.get("https://swapi.dev/api/planets/3");
    results = await Promise.all([promiseOne, promiseTwo, promiseThree]);
    console.log(results);
  } catch (e) {
    console.log(e);
  }
};

get3MorePlanets();
