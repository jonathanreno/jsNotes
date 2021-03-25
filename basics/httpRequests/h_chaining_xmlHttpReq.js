// CHAINING XMLHTTPREQUESTS

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  const data = JSON.parse(firstRequest.responseText);
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////

  // Making second request
  const residentURL = data.results[0].residents[0];

  const secondRequest = new XMLHttpRequest();

  secondRequest.addEventListener("load", () => {
    console.log("LOADED");
    const data_2 = JSON.parse(secondRequest.responseText);
  });
  secondRequest.addEventListener("error", (e) => {
    console.log("ERROR", e);
  });
  secondRequest.open("GET", residentURL);
  secondRequest.send();
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
