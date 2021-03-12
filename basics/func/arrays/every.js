// The every() array method returns true or false
// it tests whether ALL elements in the array pass the provided function


const names = ['jonathan', 'amy', 'ethan', 'aislynn', 'shiloh', 'jameson']

const isThreeLen = names.every(n => n.length === 3)

console.log(isThreeLen)


const isStr = names.every(s => typeof(s) = string )