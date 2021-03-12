// the reduce() methed reduces an array of values down to one single values

/*
Syntax

Array.reduce((accumulator, currentValye) => {
  code
})


*/

const nums = [1, 2, 3, 4, 5]

const totalSum = nums.reduce((a, b) => {
  return a += b
})

console.log(totalSum)

/*
WHATS HAPPENING...

1 -> 2 -> 3 
3 -> 3 -> 6
6 -> 4 -> 10 
10 -> 5 -> 15


*/

const mul = nums.reduce((a,b) => {
  return a *= b
})

console.log(mul)
