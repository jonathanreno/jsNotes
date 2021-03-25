// RESOLVING AND REJECTING WITH VALUES

// 1:  we pass objects as params in the 'resolve'/'reject' methods as the values
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // the resolve value usually comes in the form of data that was requested
      // the resolve data also corresponds to the above function
      const data = {
        "/usersUrl": [
          {
            _id: 1,
            username: "billyBob",
          },
          {
            _id: 2,
            username: "johnyBravo",
          },
        ],
        "/about": "this is the about page",
      };
      const success = data[url];
      if (success) {
        resolve({ status: 200, success });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

// we pass in the arguments in the 'then' 'catch' methods...
// these arguments correspond to the 'resolve'/'reject' params

// the fakeRequest args field corresponds to the function (which returns the new promise) param field above
fakeRequest("/about")
  .then((response) => {
    console.log(response.status, response.success);
    console.log("REQUEST WORKED");
  })
  .catch((response) => {
    console.log("REQUEST FAILED");
    console.log(response.status);
  });

/**
 * Whats happening
 *
 *  1: function is declared with a param of url
 *  2: a promise is returned from that function
 *  3: depending on the success or failure of the promise is what is retured, a 'resolve' or 'reject'
 *  4: the resolve method is set to to have returned, data about the fake '/users' and/or '/about' page 'stated in the setTimeout method above, as well as the status of the response'
 *  5: the reject method is set to return the status of the response (the promise failure)
 *
 */
