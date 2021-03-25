//The callstack is the mechanism that the JS interpreter uses to keep track of it's place in a script that calls multiple functions

// it's how JS 'knows' what function is currently being run and hat functions are called from within that function etc

/*
How The Stack Works

the callstack is a last-in-first-out execution (LIFO)
*/

// example
const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

/*Whats Happening in the stack
isRightTriangle ()

25 === square3 + square4 ? true
square(5) = multiply(5*5) === 25
param c = 5
square(4) = multiply(4*4) === 16
param b = 4
square(3) = multiply(3*3) === 9
param a = 3; 
*/
