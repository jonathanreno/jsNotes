// in MDN, it explains that the 'key' in which the requested data is held is caled 'this.responseText..

// BUT IN AN ARROW FUNCTION it must first be preceded by the request name WITHOUT the 'this' keyword because of SCOPE rules, in this case, 'firstRequest'

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", () => {
  console.log("LOADED");
  // show the data in json format in the console
  console.log(firstRequest.responseText);
});
firstRequest.addEventListener("error", () => {
  console.log("ERROR");
});
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request Sent");
//console.log(firstRequest);
