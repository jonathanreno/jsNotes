let winnings = {
	powerball: 20000000,
	megamillion: 50000000,
	pick3: 20000,
	pick5: 50000
}


total = 0

for (win in winnings){
	console.log(win, winnings[win])
	total += winnings[win]
}
console.log("total winnings = ", total)
