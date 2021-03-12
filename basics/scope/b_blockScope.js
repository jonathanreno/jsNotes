
// function scooe starts
const doubleArray = (arr) => {
  let result = []
  
  //block scope starts
  for (let element of arr) {
    let double = element * 2 
    result.push(double)
    
    // block scope ends
  }
  return result
  // function scope ends
}

console.log(doubleArray([1, 2, 3]))


