//:functions are objects
// functions can be stored in variables
// functions stored in variables are known as function expressions

function sum(x, y) {
  return x + y
}

console.log("NOT a func expression", sum(5,10))



console.log("_---------------------------------_")


const sum2 = (x, y) => {
  return x + y
}

console.log("IS a function expression", sum2(10, 5))