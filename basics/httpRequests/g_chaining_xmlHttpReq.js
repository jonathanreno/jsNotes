// CHAINING XMLHTTPREQUESTS

// to chain xmlhttprequests, you need to make another request as a callback WITHIN the first request

// in the data.results, you will see an array of data called residents.. if you console log this,
// you will see that they are arrays of OTHER endpoints.

// the first 'residents' array' first element is is what we will access next while making our second (chained) request

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  console.log("LOADED");
  const data = JSON.parse(firstRequest.responseText);

  /* for (planet of data.results) {
    console.log(planet.residents);
  } */
  // get the first 'residents' array
  console.log(data.results[0].residents[0]);
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request Sent");
