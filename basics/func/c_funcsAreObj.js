// functions are objects

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

// this is an array of objects
const operations = [add, sub, mul, div]


// calling each function within the arrray
for (num of operations){
  let result = num(10, 2)
  console.log(result)
}

// like objects, functions have key value pairs
console.log(add, add.length, add.name)
console.log(sub, sub.length, sub.name)
console.log(mul, mul.length, mul.name)
console.log(div, div.length, div.name)