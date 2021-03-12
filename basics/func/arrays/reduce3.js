// the reduce method can ALSO optionally take in a second argument called the 'initial value'. this value is what the method always STARTS at no matter what the values in the array are.

/*
Syntax 

Array.reduce((accumulator, currentValue) => {
  code
}, initialValue )
*/

const nums = [2, 4, 6, 8, 10]

const sum = nums.reduce((a, b) => {
  return a += b
}, 1000)

console.log(sum)

/*
WHATS HAPPENING
initial value starts at 1000
1000 + 2 = 1002
1002 + 4 = 1006
1006 + 6 = 1012 
1012 + 8 = 1020
1020 + 10 = 1030

*/