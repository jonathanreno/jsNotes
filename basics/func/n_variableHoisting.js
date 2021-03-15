// variable declarations that are not defined are NOT hoisted
// Throws ERROR
console.log(name)
let name = 'jonathan'
// same with const
console.log(lastName)
const lastName = 'reno'



// HOISTING WITH VAR

var animal = 'bird'
console.log(animal)
// valid

console.log(car)
var car = 'mustang'
// undefined -- because execution happens line-by-line and the car variable was not dedined before being logged

// it outputs undefined with NO ERROR thrown becauese the variable is technically declared. 

/*
The JS interpreter interprets this code as 



var car;
console.log(car)
car = 'mustang'
a
*/


