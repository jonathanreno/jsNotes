//DESTRUCTURING OBJ PARAMS

const job = {
  name: 'Medone',
  yearsWorked: 3,
  title: 'emt',
  location: 'hartsville'
}


// you CAN destructure params like so...

const printJob = (work) => {
  const {name, yearsWorked, title, location} = work 
  console.log(work)
}

printJob(job)




//BUT we can shorten it by just destructuring INSIDE the param field like so....
const printJobAgain = ({name, yearsWorked, title, location})  => {
  console.log(name, yearsWorked, title, location)
}

printJobAgain(job)





// DESTRUCTURING ARRAY PARAMD

const response = [
    'HTTP',
    '200',
    'application/json'
  ]
  
  
  const printRes = ([protocol, statusCode, type]) => {
    console.log(protocol, statusCode, type)
  }
  
  printRes(response)