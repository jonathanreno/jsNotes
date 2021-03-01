// functions are hoisted when called  before they are declared

sayHi()

function sayHi() {
  console.log('hi')
}






// function expressions are NOT hoisted

sayNo()

let sayNo = function() {
  console.log("Noooo")
}