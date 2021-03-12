// destructuring arrays 'unpacks' elements in an array into their own distinct variables


const racerPets = [
    'fluffy', 'momo', 'jory', 'dixie', 'rosco'
  ]
  
  
  //pre destructuring
  // we COULD order the pets by who wins the race first
  
  /*
  
  const gold = racerPets[0]
  const silver = racerPets[1]
  const bronze = racerPets[2]
  
  console.log(gold, silver, bronze)
  
  */
 
  // OR can destructure for cleaner Syntax 
  const [gold, silver, bronze] = racerPets
  
  console.log(gold, silver, bronze)
  
  //whats happening
  
  /*
  
  the first 3 elements in the racerPets array are set to gold, silver, then bronze.  they all 3 have their own seperate variables now.
  
  AND they are still elements in the racerPets array
  
  */
  console.log(racerPets[0], racerPets[1], racerPets[2])
  

  
  
  
  // you can also skip indexes when destructuring arrays
  // you can do this by adding extra commas after the previous element. 
  // the amount of commas are added is how many indexes are being skipped
  
  const [,second,,, fifth] = racerPets
  
  console.log(second, fifth)
  
 
 // can also seperate other elements into its own array variable with rest param
 
 const [winner, ...others] = racerPets
 
 console.log(winner, others)
 
 
 
 
 // lastly of course we can copy the array into a new one using rest params. this is also considered destructuring
 const [...newName] = racerPets
 
 console.log(newName)
 
 
