// reduce method can also be used for tallying.

// It counts the amount of the array elements and stores all the  values in a key:val pair inside of an  object; the elements  are stored according to the function test given it


/*
Syntax 

Array.reduce((func) => {
  code
}, {})
*/

const votes = ['y', 'y',  'n', 'y', 'n', 'n', 'y']

const ballet = votes.reduce((tally, val) => {
  if (tally[val]){
    tally[val]++
  } else {
    tally[val] = 1
  }
  return tally
}, {})

console.log(ballet)


/*
WHATS HAPPENING
if count of the value is true (1 or greater)
add 1 to the value count and store it in an obj/key:val

otherwise if count of value is false (0);
make the count of the value to be 1

return the count of vals as kry:vals in an object

is there a val? yes; a y; {y:1}
is there a val? yes; a y; {y:2}
is there a val? yes; an n; {n:1}
is there a val? yes; a y; {y:3}
is there a val? yes; an n; {n:2}
is there a val? yes; an n; {n:3}
is there a val? yes; a y; {y:4}

return the amount of each val in an object of key:val pairs

returns...      {
                   y: 4, 
                   n: 3
                }

*/

// diffetent way of writing
const ballet2 = votes.reduce((tally, val) => {
  tally[val] = tally[val] + 1 || 0 + 1
  return tally
}, {})

console.log(ballet2)


//////?//////////////////////////////////////////


const people = [
    {
      name: 'amy',
      age: 40,
      city: 'florence',
      sex: 'female'
    },
    {
      name: 'jonathan', 
      age: 35,
      city: 'florence',
      sex: 'male'
    },
    {
      name: 'artis',
      age: 58,
      city: 'hartsville',
      sex: 'female'
    }
  ]
  
  const ages = people.reduce((count, person) => {
    const key = Math.floor(person.age)
    if (!count[person]){
      count[person] = []
    } else {
      count.push(person)
    }
    return count
  }, [])
  
  console.log(ages)