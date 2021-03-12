
const animals = ['bear', 'dog', 'fish']

for (let i = 0; i < animals.length; i++) {
  // is valid because it is in this block's scope
  console.log(i, animals[i])
}

// is NOT valid because it is not within the loop's block scope
// AND there is no global variable  named i
console.log(i)