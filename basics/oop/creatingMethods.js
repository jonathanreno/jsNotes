// functions are objects
// and when functions are stored INSIDE of an objects
// they are known as methods

const add = (x, y) => {
  return x + y
}

const sub = (x, y) => {
  return x - y
}

const mul = (x, y) => {
  return x * y
}

const div = (x, y) => {
  return x / y
}

const operations = {
  addition: add,
  subtraction: sub,
  multiplication: mul,
  multiplication: mul,
  division: div
}

console.log(operations.addition(10, 2))
console.log(operations.subtraction(10, 2))
console.log(operations.multiplication(10, 2))
console.log(operations.division(10, 2))