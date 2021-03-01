// array.find() method finds one value in an array and STOPS as soon as it finds the first value that matches the query

let names = [
    "Mr. Smith", "Ms. Wallace", "Sir John", "Mr. James", "Sir Charles"
]

const searchMister = names.find(m => m.includes("Mr."))

console.log(searchMister)



const searchSir = names.find(s => s.includes("Sir"))

console.log(searchSir)



const searchMs = names.find(ms => ms.includes("Ms"))

console.log(searchMs)




// Also very useful for finding things in an array of objects

const family = [
    {
        name: "amy", 
        age: 40, 
        role: "mother"
    }, 
    {
        name: "jonathan", 
        age: 35, 
        role: "Father"
    }, 
    {
        name: "shiloh", 
        age: 2, 
        role: "daughter"
    }, 
    {
        name: "jameson", 
        age: 1,
        role: "son"
    }
]

const findFirst2YrOld = family.find(tyo => tyo.age === 2)

console.log(findFirst2YrOld)



const find40YrOld = family.find(f => f.age === 40)

console.log(find40YrOld)



const find35YrOld = family.find(t => t.age === 35)

console.log(find35YrOld)



const findDaughter = family.find(d => d.role === "daughter")

console.log(findDaughter)



const findSon = family.find(s => s.role === "son")

console.log(findSon)



