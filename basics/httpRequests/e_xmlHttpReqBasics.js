// Now we must get the data in js format instead of json format

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  console.log("LOADED");
  // turn json into JS
  const data = JSON.parse(firstRequest.responseText);
  console.log(data);
  //console.log(firstRequest.responseText);
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request Sent");

// now you will see the data in JS format and no longer in json
