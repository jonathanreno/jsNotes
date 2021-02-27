const myNums = [1, 2, 3, 4, 5]

const myNums2 = [6, 7, 8, 9, 10]

const myNums3 = [11, 12, 13, 14, 15]

const allNums = [myNums, myNums2, myNums3]

console.log("reg loop\n----------------\n")
for (num of myNums){
	console.log(num)
}


total = 0
console.log("nested loop\n---------------\n")
for (all in allNums){
	console.log(allNums[all])
}
