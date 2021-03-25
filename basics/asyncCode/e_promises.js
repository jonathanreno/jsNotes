// CREATING A PROMISE

// a promise is an obj representing the eventual completion or failure of an asyncronous operation

// it is a pattern that allows us to write asyncronous code that is much cleaner and easier to read

// it is a returned object to which you attach callbacks, instead of passing callbacks into a function

// making a promise
// Promise takes in a function with two params, 'resolve', and 'reject'... resolve and reject are actually functions
// calling 'resolve', the promise will be resolved... .calling 'reject', the promise will be rejected

const willGetYouADog = new Promise((resolve, reject) => {});

console.log(willGetYouADog); // output = Promise { <pending> }
// the promise STATUS at this point is pending, meaning the promise has not yet been resolved or rejected (fulfilled or broken)
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// if we immediately call 'reject()'.....
const willGetYouADogAgain = new Promise((resolve, reject) => {
  reject();
});
// the promise STATUS is rejected

console.log(willGetYouADogAgain); // output = Promise { <rejected> undefined }

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// if we immediately call 'resolve()'
const willGetYouACat = (resolve, reject) => {
  resolve();
};

console.log(willGetYouACat); // output = Promise { <resolved> undefined }
// promise STATUS is resolved
