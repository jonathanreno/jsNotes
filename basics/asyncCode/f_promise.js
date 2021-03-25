// PROMISE with the 'then' method

// consider this promise that resolves or rejects depending on the random number given
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

// EVERY promise has a 'then' method
// the 'then' method will run IF our promise is RESOLVED
// the 'then' method takes in a callback
willGetYouADog.then(() => {
  console.log("Yay you have a dog!!!");
});

console.log(willGetYouADog); // if resolved... output = Yay you have a dog!!!
