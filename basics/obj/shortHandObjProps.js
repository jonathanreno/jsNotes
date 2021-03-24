// shothand obj properites are good for vreating obj literals when you have variables
// key=variable name value=variable value

// Old way

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return {
    max: max,
    min: min,
  };
};

const numsArray = [12.4, 43.5, 12.2, 87.45];

const stats = getStats(numsArray);

console.log(stats); // output= { max: 87.45, min: 12.2 }

// New way
const getStatsAgain = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return {
    max,
    min,
  };
};

const numsArray2 = [12.2, 54.5, 44.3, 2.1, 7.6, 99.9];

const stats2 = getStatsAgain(numsArray2);

console.log(stats2); // output= { max: 99.9, min: 2.1 }

// whats happening:
/**
 * in the return statement/obj, instead of putting the key:value syntax,  you can just put the variable names inside the object and it returns the key AND value of the variable
 */
