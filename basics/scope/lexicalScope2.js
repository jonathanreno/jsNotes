const outer = () => {
  let movie = 'braveheart'
  
  const inner = () => {
    let movie = 'last samurai'
    
    const extraInner = () =>{
      console.log(movie)
    }
    extraInner()
  }
  inner()
}

outer()