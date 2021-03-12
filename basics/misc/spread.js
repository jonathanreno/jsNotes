// spread in function calls

// spreading for function calls breaks up an iterable into single elements as arguments rather than the iterable being only one argument in itself.

// This is helpful for methods that do not accept iterables as parameters

const nums = [3, 67, 8, 56, 23]

console.log(Math.max(...nums)) 
console.log(Math.min(...nums))

// console.log(Math.max(nums)) --> NaN

