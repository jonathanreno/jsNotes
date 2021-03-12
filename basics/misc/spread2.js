// the spread operator for arrays can take existing arrays, 'copy' them and put them into new arrays, combine arrays, etc

const animals = ['bear', 'lion', 'tiger', 'fish', 'dog', 'cat', 'mongoose', 'snake', 'wallabe', 'kangaroo']

const weapons = ['pistol', 'rifles', 'kmife', 'sword', 'bat', 'fist', 'boot', 'pipe', 'brass knuckles']

const cars = ['mustang', 'lambo', 'ferrari', 'bugatti', 'rolse royce', 'viper', 'lexus']




// Making two arrays into one
const twoArraysToOne = [...animals, ...weapons]

console.log(twoArraysToOne)


// Making three arrays into one
const threeToOne = [...animals, ...weapons, ...cars]

console.log(threeToOne)


// making simple copies
const animalCopy = [...animals]

console.log(animalCopy)



const weaponCopy = [...weapons]

console.log(weaponCopy)



const carCopy = [...cars]

console.log(carCopy)




// can insert other types and other data into the spread array
const moreAnimals = ['elephant', 'gorrila', ...animals]

console.log(moreAnimals)



// Strings are iterables. You can split strings into an array literal with the spread operator

const myName = [...'jonathan']

console.log(myName)

