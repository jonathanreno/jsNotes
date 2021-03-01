// a callback function is essentially a function that a a function(s) as a parameter and calls those function parameters



const f1 = () => {
  return "this is f1"
}

const callBack = (func) => {
  return func()
}



console.log(callBack(f1))