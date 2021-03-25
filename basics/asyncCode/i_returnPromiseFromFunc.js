// We can RETURN promises from functions like so..

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeDogPromise().then(() => {
  console.log("Yay you have a dog!!!");
});
makeDogPromise().catch(() => {
  console.log("BOOHOO i dont have a dog!!! :(");
});

console.log("hello");
console.log("wolrd");

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

makeDogPromise();

// this is the same promise running as in the previous file (h_returnPromiseFromFunc), but in this code, the promise is in a function, being returned, and THEN the
// 'then' and 'catch' methods are attached to the FUNCTION (which is returning the promise) itself, instead of being attached to the promise itself.
