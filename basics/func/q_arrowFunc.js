// arrow functions provide more compact Syntax

const arrow = () => {
  console.log('im an arrow func')
}

arrow()

function notArrow() {
  console.log('im NOT an arrow func')
}

// if an arrow function has only one parameter, the parenthesis around it can be left 

const square = num => {
  return num * num
}

console.log(square(5))