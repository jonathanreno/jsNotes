// 'this' and ARROW FUNCTIONS

const myObj = {
  a: "a",
  b: "b",
  laughMethod() {
    console.log("laugh scope = ", this);
    console.log("hahaha");
  },
  cryMethod: () => {
    console.log("cry scope = ", this);
    console.log("boohoo");
  },
};

myObj.laughMethod();
myObj.cryMethod();

/**
 * Whats happening
 *
 * the laughMethod referrences the myObj's block-scope while the 'cryMethod' arrow function
 * referrebces the global/window obj
 */
