// rest parameter looks like the spread operator but its not.

// it is an array that provides the needed amount of arguments when 
// you dont know how many args are needed OR there are just too many args to list 

// it is an actual array that is produced



const showNums = (...nums) => {
  console.log(...nums)
}

showNums(1, 5, 8, 5, 7, 2, 3, 0, 8)




// get sum of args
const sum = (...nums) => {
  return nums.reduce((reducer, total) => {
    return reducer + total
  })
}

console.log(sum(2, 6, 10, 65, 87))




// can also collect any REMAINING arguments in the params field

const printInfo = (name, age, ...remainingArgs) => {
  console.log(`${name}\n${age}\n${remainingArgs}`)
}

printInfo('jon', 35, 'florence ', 'SC ', 'web developer')







// rest parameters HAVE to be the last params in the param field

/*

const printInfo = (remainingArgs, name, age) => {
  console.log(`${name}\n${age}\n${remainingArgs}`)
}

printInfo('jon', 35, 'florence ', 'SC ', 'web developer')


// WILL THROWN AN ERROR 
*/






