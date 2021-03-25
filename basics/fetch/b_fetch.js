const fetch = require("node-fetch");

const makeRequest = fetch("http://swapi.dev/api/films/1/")
  .then((response) => {
    console.log("SUCCESS", response);
  })
  .catch((response) => {
    console.log("ERROR");
  });

/*
  notice when logging the response obj, it shows a key named 'body', and beside it a 'readableStream'

  a readblaStream is byte-content. that means it is a way of accessing data that is super large, and receiving it in chunks rather than all at once. it is accessed and processed as you go.

  in the fetch documentation, there are a list of methods. one of the methods for the 'body' is body.json().

    ... next page --->
  */
