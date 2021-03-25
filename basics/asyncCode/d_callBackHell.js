const imaginaryButton = "clicked";

/* setTimeout(() => {
  console.log(imaginaryButton);
}, 1000); */

// this isnt too bad, but if we want the console loged every second for an amount of time, this results in something called 'callback hell'

setTimeout(() => {
  console.log(imaginaryButton);
  setTimeout(() => {
    console.log(imaginaryButton);
    setTimeout(() => {
      console.log(imaginaryButton);
      setTimeout(() => {
        console.log(imaginaryButton);
        setTimeout(() => {
          console.log(imaginaryButton);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// we are running callback after callback after callback.
// this gets messy and can be hard to understand and read after a while
