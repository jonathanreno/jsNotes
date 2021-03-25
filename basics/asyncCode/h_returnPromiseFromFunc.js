// Returning Promises from functions

// consider this, putting the promise in a setTimeout method set to run after 5 seconds
const willGetYouADog = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand < 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});
willGetYouADog.then(() => {
  console.log("Yay you have a dog!!!");
});
willGetYouADog.catch(() => {
  console.log("BOOHOO i dont have a dog!!! :(");
});

// notice how all the code below this line runs before the promise above is completed (resolved or rejected)
// This is MUCH cleaner and easier to understand than multiple nested callbacks
console.log("hello");
console.log("wolrd");

for (let i = 0; i <= 100; i++) {
  console.log(i);
}
