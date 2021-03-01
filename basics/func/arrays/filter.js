// the Array.filter() method creates a new array with all elements that pass the test implemented by the provided function


const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
]

const getOdds = nums.filter(n => n % 2 === 1)

console.log(getOdds)




// Also very useful for arrays of objects

const books = [
    {
        title: "Romans", 
        author: "paul", 
        rating: 5
    }, 
    {
        title: "1 john", 
        author: "john", 
        rating: 5
    }, 
    {
        title: "1 peter", 
        author: "peter", 
        rating: 5
    }, 
    {
        title: "Titus", 
        author: "titus", 
        rating: 5
    }, 
    {
        title: "1 Timothy", 
        author: "paul", 
        rating: 5
    }, 
    {
        title: "Luke", 
        author: "Luke", 
        rating: 5
    }
   
]


findPaul = books.filter(p => p.author === "paul")

console.table(findPaul)