// CHAINING FETCH REQUESTS

// see last file for comparison and dfferences

/*
    to chain requests, first we must move the 'then' outside and then RETURN 'response.json()', which is a promise
*/

const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(` STATUS: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const filmUrl = data.characters[0];
    return fetch(filmUrl);
  })

  ///////////////////next chain/////////////////////////////////////////
  // copy and paste from here
  .then((response) => {
    if (!response.ok) {
      throw new Error(` STATUS: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const filmOne = data.films[0];
    return fetch(filmOne); // <-- next chain
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(` STATUS: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
