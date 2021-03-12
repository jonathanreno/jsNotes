// default parameters can be set in a function

const add = (a=5, b=10) => a + b

console.log(add()) // 15

console.log(add(20)) // 30

console.log(add(3, 7)) // 10






const greet = (person, greeting="hello") => {
  console.log(`${greeting}, ${person}!`)
}

greet('dude') // hello, dude