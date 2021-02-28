// functions can be return values
// functions can return named functions 
// functions can return anonymous functions

// These type of higher order functions are commonly used as 'factory functions' to create other functions 


const multiplyBy = (num)  => {
  return (x) => {
    return x * num
  }
}

const a = multiplyBy(4)

console.log(a(2))


// variable a is the function multiplyBy, w/ param of num which corresponds to 4
// 4 goes on stack
//a returns anon function w/parameter x which corresponds to 2 
// 2 gets pushed onto stack
// a's anon func returns 4 * 2



/*
stack

4
2
4*2 = 8
*/



////////////////EXAMPLE 2//////////////////////////////
const addTo = (num) => {
  return num
}

const myNum = (x) => {
  return x
}


const together = (f1, f2) => {
  return f1 + f2
}

const seven = together(addTo(4), myNum(10))
console.log(seven)




/////////////////////////EXAMPLE 3//////////////////////////

const addOn = (num) => {
  const myNumber = (x) => {
    return x + num
  }
  return myNumber
}

const addedPoints = addOn(7)
console.log(addedPoints(2))