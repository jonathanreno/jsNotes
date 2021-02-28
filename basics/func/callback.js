const add = (a, b) => {
  return a + b
}

const mul = (add, () => {
  return add * 10
})

console.log(mul(5,3))