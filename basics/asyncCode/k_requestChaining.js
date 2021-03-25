// PROMISE CHAINING

//' this is the same promise setup from the previous file, only with more (fake) data
// to demonstrate how promise chaining works with apis and requests

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        "/usersUrl": {
          usersUrl: [
            {
              _id: 1,
              name: "john doe",
            },
            {
              _id: 2,
              name: "Billy Bob",
            },
          ],
          "/usersUrl/1": {
            _id: 1,
            name: "john doe",
            location: "USA",
            age: 38,
          },
          "usersUrl/2": {
            _id: 2,
            name: "Billy Bob",
            location: "CHN",
            age: 40,
          },
          "posts/454321": {
            _id: 454321,
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

// the first 'then' method is showing the data requested, whicb is all the data in the obj/fake api
fakeRequest("/usersUrl").then((response) => {
  console.log(response.success);
});
