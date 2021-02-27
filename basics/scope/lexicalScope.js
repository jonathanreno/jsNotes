
// outer func scope starts
const outer = () => {
  let name = 'Jonathan'
  
  // inner func scope starts 
  // inner func has access to outer func scope
  const inner = () => {
    let statement = `${name} loves shiloh and jameson`
    console.log(statement)
    
    // inner func scope ends
  }
  
  // inner called WITHIN the outer's function scope
  inner()
  
  // outer func scope ends
}

outer() // jonathan lovesbl shiloh and jameson
