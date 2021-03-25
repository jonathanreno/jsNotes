// You will see in the data, an array of the requested data, a key named 'results', who's value //// is an array of objects.

// this is the data to access with a LOOP

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  console.log("LOADED");
  const data = JSON.parse(firstRequest.responseText);
  //console.log(data);
  // access the results array with a loop to get data
  for (planet of data.results) {
    console.log(planet.name);
  }
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request Sent");

// You will see logged, ALL the 'name' keys' values
