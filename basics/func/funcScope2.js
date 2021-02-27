let age = 40


const funcScope2 = () => {
  let age = 35
  console.log("func scope", age)
}

// with two variables of the same name; one in global  
// global scope; one in function scope; the function checks to see 
// its own scope first
funcScope2()
console.log("global scooe", age)