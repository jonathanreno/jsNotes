/**
 * Spread operator allows an iterable to be expanded in places where zero or more arguments (for function calls)
 * or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-val pairs (for obj literals) are expected
 * */

// spread for function calls allows an iterable to go into an arguments field for functions/methods that dont allow iterables



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const isMax = () => Math.max(...nums)

console.log(isMax())


const isMin = () => Math.min(...nums)

console.log(isMin())




//////////ANOTHER EXAMPLE

const colorsArray = ['red', 'blue', 'purple', 'yellow']

const colors = (a, b, c, d) => {
    console.log(`a: ${a}\nb: ${b}\nc: ${c}\nd: ${d}`)
}

colors(...colorsArray)




//////////ANOTHER EXAMPLE

const word = 'four'

const spellWord = (a, b, c, d) => {
    console.log(`a: ${a}\nb: ${b}\nc: ${c}\nd: ${d}`)
}

spellWord(...word)