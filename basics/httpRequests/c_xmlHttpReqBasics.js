// within the node js environment, you must first use 'npm install xmlhttprequest'

// then
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// First Basic request
const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  console.log("LOADED");
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request Sent");
console.log(firstRequest);

// while console logging first request, it shows info ABOUT the request itself.
// AND in the responseText 'key' is where the data WILL show up... next....
