// onject values can be destructured ('unpacked') into their own stand alone variables

// the variable names for the obj values are BASED OFF THE namesOF THE PROPERTY (ie the value's key)

const boxer = {
  name: 'mike tyson',
  country: 'usa', 
  weightClass: 'heavyweight'
}


// notice that order doesnt matter in obj destructuring like in array destructuring. only the name matters
const {name, weightClass, country} = boxer
console.log(name, weightClass, country)



// Even though the name matters, you can still change the name of the variable
// lets create another obj for this next example
const fighter = {
  firstName: 'anderson',
  insect: 'spider',
  lastName: 'silva',
  weightClass: 'middleweight',
  country: 'brazil'
}

const {country: nation} = fighter

console.log(nation) 




const {insect: nickname} = fighter

console.log(nickname)




// can also seperate any remaining values with the spread operator

const matchUp = {
  ...boxer,
  ...fighter
}

console.log(matchUp)

