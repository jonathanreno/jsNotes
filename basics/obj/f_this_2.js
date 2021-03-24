// there is a particular quirk with the 'this' keyword
// here is an example

const global = () => {
  console.log("global scope this = ", this, "the window object");
};

global();

// 1: so far so good. 'this' is referrencing the global/window obj
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const myObj = {
  a: "a",
  b: "b",
  c() {
    console.log(this);
  },
};
myObj.c();

// so far so good again. 'this' is referrencing the 'myObj'.
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const myObj2 = {
  one: "one",
  two: "two",
  three() {
    const { one, two } = this;
    return `${one} and ${two}`;
  },
  printValues() {
    const allValues = this.three();
    console.log(`all values are ${allValues}`);
  },
};
myObj2.printValues();

// so far so good once more. 'this' is referrencing the correct things in the correct scope
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const myObj3 = {
  ten: "ten",
  eleven: "eleven",
  twelve() {
    const { ten, eleven } = this;
    return `${ten} and ${eleven}`;
  },
  printAll() {
    const myValues = this.twelve();
    console.log(`myValues are ${myValues}`);
  },
};

const printAll = myObj3.printAll();
printAll(); // output = TypeError: printAll is not a function

/*
Whats Happening

this is one of the quirks with the word this.
myObj3.printAll() was  stored in a variable called 'printAll'
the 'printAll' variable is now in the GLOBAL/WINDOW scope
            -----BUT-----
if you pay attention to the 'this' keyword inside the printAll() method, it is referring to the 
'twelve()' method which is in the 'myObj3' block-scope and does not have direct access to the global/window scope

so 'printAll()' is now trying to call a method that is referencing an object that does not have access to it's scope

*/
