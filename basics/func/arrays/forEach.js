/*

Array.forEach((param, index) => {
  execute
})

*/



// the forEach array method takes a callback function and executes the callback FOR EACH array element



const a = [1, 2, 3, 4, 5, 6, 7]

a.forEach((i) => {
  console.log(i)
})

// get the indexes
a.forEach((el, i) => {
  console.log(`${i}: ${el}`)
})

// forEach also takes any predefined functions for its callback

const printTriple = (num) => {
  console.log(num * 3)
}
a.forEach(printTriple)


// other examples

const books = [
  {
    name: 'Romans',
    author: 'paul'
  },
  {
    name: 'first john',
    author: 'john'
  }
  ]
  
  books.forEach((book) => {
    console.log(book.name)
  })