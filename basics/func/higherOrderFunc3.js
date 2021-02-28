const isBetweenTwoNumbers = (x, y) => {
  const number = (num) => {
    
    // if num >= x AND if num <= y then return truw
    return num >= x && num <= y
  }
  return number
}

const isChild = isBetweenTwoNumbers(0, 18)

console.log(isChild(20))
console.log(isChild(16))


const isEightiesBaby = isBetweenTwoNumbers(1980,1989)
console.log(isEightiesBaby(1985))
console.log(isEightiesBaby(1990))