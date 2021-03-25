// the 'catch' method is chained on to the end of the promise chain and handles
// what to do if the promise 'reject()' is called / promise has been rejected

const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog.then(() => {
  console.log("Yay you have a dog!!!");
});
willGetYouADog.catch(() => {
  console.log("BOOHOO i dont have a dog!!! :(");
});

console.log(willGetYouADog); // if rejected... output = BOOHOO i dont have a dog!!! :(
