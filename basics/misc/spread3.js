// The spread operator for object literals can also copy AND add on key/value pairs to the copy

const feline = {
    legs: 4, 
    family: 'Feline'
}

const canine = {
    family: 'Canine',
    furry: true
}

const rodent = {
    family: 'rodent',
}



const cat = {...feline, furry: true}

console.log(cat)



const dog = {...canine, legs: 4}

console.log(dog)



const pet = {...canine, ...feline, adorable: true, isPet: true}

console.log(pet)



const animal = {
    ...feline, 
    ...canine, 
    ...dog, 
    ...cat, 
    ...rodent
}

console.log(animal)


const animalClone = {
    ...animal
}

console.log(animalClone)