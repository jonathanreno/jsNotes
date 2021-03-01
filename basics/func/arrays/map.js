// The map  array nethod creates a new array from an existing one

const textPhrases = ['lol', 'lmao', 'rofl', 'gtfoh']

const caps = textPhrases.map((t) => {
  return t.toUpperCase()
})

console.log(caps)

// can also extract portions of an array

const family = [
  {
    name: 'jonathan',
    age: 35,
    role: 'father'
  },
  {
    name: 'amy',
    age: 40,
    role: 'mother'
  },
  {
    name: 'shiloh',
    age: 2,
    role: 'daughter'
  },
  {
  name: 'jameson',
  age: 1,
  role: 'son'
  }

]

const ages = family.map((a) => {
  return {
    number: a,
    isEven: a % 0 === 2
  }
})

console.log(ages)


// useful for string manipulation
const abreviate = textPhrases.map((text) => {
  return text.split('').join('.')
})

console.log(abreviate)