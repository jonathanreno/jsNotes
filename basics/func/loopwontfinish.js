const isBlue = (arr) => {
  for (let color of arr) {
    if (color === 'blue' || color === 'baby blue') {
      return true
    } else {
      return false
    }
  }
}


// this returns false because the "return false" statement
// is WITHIN the loop and only runs through loop ONCE and finishes
// execution
console.log("loop running once with true colors in array",isBlue(['purple','blue', 'baby blue']))



const isBlue2 = (arr) => {
  for (let color of arr) {
    if (color === 'blue' || color === 'baby blue') {
      return true
    }
  }
  return false
}

// this will return true because the return false statement is NOT within the loop AND the colors specified in the if statement are within the array
console.log("loop running for each element with true colors in array", isBlue2(["purple", "red", "blue"]))

// returns false because the true colors are NOT within the array
console.log("loop running for each element with true colors NOT IN ARRAY", isBlue2(["red", "purple", "green"]))