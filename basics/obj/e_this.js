// 'this' is a keyword in JS. you can think of it as a reference to the current execution-scope

// it gives you an object back... so depending on the scope and rules of the current execution scope, is what determines what the object will be

// Example of this in GLOBAL SCOPE

const hi = () => {
  console.log("hi");
  console.log(this);
};
hi(); // output = hi
//                {}

/*Whats Happening

the {} (in this particular current console) represents the 'Window' object. The Window is the global scope in the browser

window obj = global scope

.... in essence, the function hi() is floating in the middle of nowhere (the global-scope/window)


NOTE:: let and const are not added to the window object
    let color = 'blue'
    console.log(window.color)       output= undefined
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const me = {
  name: "jon",
  age: 35,
  greet() {
    console.log("hello im jon");
    console.log(this);
  },
};

console.log(me); // output= { name: 'jon', age: 35, greet: [Function: greet] }

/*
this time, the keyword 'this' is not referring to the window/global-scope... it is reffering to the object that the 'this' keyword is within. this 
is because the 'this' keyword is inside of the method and the method is within the obj's block-scope 
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// example

const person = {
  first: "jonathan",
  last: "reno",
  nickname: "jon",
  fullname() {
    const { first, last, nickname } = this;
    return `${first} '${nickname}' ${last}`;
  },
  printBio() {
    const fullname = this.fullname();
    console.group(fullname);
  },
};

person.printBio();
