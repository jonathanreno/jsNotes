// by default, the sort() method behavior is to sort by ascii String.
// This produces undesireable results with numbers...

const nums = [11, 13.4, 6, 88]

const defaultSort = nums.sort()

console.log(defaultSort)


// there must be a "conparison function" to handle this issue

const rightSort = nums.sort((a, b) => a - b)

console.log(rightSort)


const rightSort2 = nums.sort((a,b) => b - a)

console.log(rightSort2)


// can use in objects