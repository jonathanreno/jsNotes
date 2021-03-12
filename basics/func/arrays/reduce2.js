// finding/keeping update of max value

const nums = [1, 66, 64, 87, 99, 629, 96,]

const maxVal = nums.reduce((a, b) => b > a ? b : a)

console.log(maxVal)

/*
WHATS HAPPENING...

1 > 66 ? 66
66 > 64 ? 66
66 > 87 ? 87 
87 > 99 ? 99
99 > 629 ? 629
629 > 96 ? 629

*/

// different way of writing
const maxValAgain = nums.reduce((a,b) => Math.max(a, b))

console.log(maxValAgain)



///////////////////////////////////////////////////////////
// finding lowest value
const lowVal = nums.reduce((a, b) => b < a ? b : a)

console.log(lowVal)


/*
WHATS HAPPENING
1 < 66 ? 1 
1 < 64 ? 1 
1 < 87 ? 1 
1 < 99 ? 1 
1 < 629 ? 1 
1 < 99 ? 1

*/

/*
WHATS HAPPENING
1 < 66 ? 1 
1 < 64 ? 1 
1 < 87 ? 1 
1 < 99 ? 1 
1 < 629 ? 1 
1 < 99 ? 1

*/

// different way of writing it 
const lowValAgain = nums.reduce ((a, b) => Math.min(a, b))

console.log(lowValAgain)