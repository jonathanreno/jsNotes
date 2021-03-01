// arrow funcs support implicit return statements when the return statement is the only expression in the function body
// This makes the arrow func even more compact

const add = num => num + num

console.log(add(3))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const double = nums.map(n => n * 2)

console.log(double)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// can even be used with a conditional

const isEven = nums.map(n => n % 2 === 0 ? true : false)

console.log(isEven)