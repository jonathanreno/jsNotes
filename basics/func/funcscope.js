const funcScope = () => {
  let a = 1 
  const b = 2 
  var c = 3
  console.log("inside function", a, b, c)
}

funcScope()

// cannot access  outside of function
console.log(a, b, c)