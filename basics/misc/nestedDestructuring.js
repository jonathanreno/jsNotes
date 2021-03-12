// Objects inside of an array

const names = [
    {
      first: 'jon',
      last: 'reno'
    },
    {
      first: 'amy', 
      last: 'bailey'
    },
    {
      first: 'shiloh',
      last: 'reno'
    },
    {
      first: 'jameson',
      last: 'reno'
    },
  ]
  
  
  // destructure the last name of second element/Obj 
  const [,{last}] = names
  
  console.log(last)
  
  // change first name of last element t
  const [,,,{first: mySon}] = names
  
  console.log(mySon)