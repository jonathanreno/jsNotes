// functions can store other functions as parameters

const callTwice = (func) => {
  func()
  func()
}

const laugh = () => {
  console.log("hahahahahahahahahaha")
}

callTwice(laugh)



// functions can be made to repeat other functionsn number of times
const repeatNtimes = (func, num) => {
  for (let i = 0; i < num; i++) {
    func()
  }
}

const cry = () => {
  console.log("boohoo im sad")
}


repeatNtimes(cry, 14)

