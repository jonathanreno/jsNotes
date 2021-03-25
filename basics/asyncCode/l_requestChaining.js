// PROMISE CHAINING

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        "/usersUrl": {
          usersUrl: [
            {
              id: 1,
              name: "john doe",
            },
            {
              id: 2,
              name: "Billy Bob",
            },
          ],
          "/usersUrl/1": {
            id: 1,
            name: "john doe",
            location: "USA",
            age: 38,
          },
          "usersUrl/2": {
            id: 2,
            name: "Billy Bob",
            location: "CHN",
            age: 40,
          },
          "posts/454321": {
            id: 454321,
            title: "may i introduce myself",
          },

          "/about": "this is the about page",
        },
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

// now lets change this request to something more specific, for proof of concept

fakeRequest("/usersUrl").then((response) => {
  // we are storing all the ids of the data object {[{}, {}], {}, {}, {}, .....} in a variable to request them
  const id = response.data[0].id;

  // next we are chaining on a request, requesting what was stored in the variable (all the ids)
  fakeRequest(`/usersUrl/${id}`).then((response) => {
    //console.log(response);
    const userLocation = response.data.location;
    fakeRequest(`/posts/${userLocation}`).then((response) => {
      console.log(userLocation);
    });
  });
});
// in essence
// the next request is dependent on the last
