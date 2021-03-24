// computed properties are when you have a property with a dynamic key

// Old Way

const role = "host";
const person = "john doe";

// here, if we try to set the value of role (which is "host") to person (whos value is "john doe"), role's value is now person's value ('john doe').

const team = {
  role: person,
};

console.log(team, role); // output= { role: 'john doe' } host

// a new Fix is by adding square brackets around the variable inside the object and setting its value

const team2 = {
  [role]: person,
};

console.log(team2); // output=  { host: 'john doe' }
