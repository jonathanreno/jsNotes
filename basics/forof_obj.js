let movieList = {
	saw: 5,
	theRing: 3,
	superman: 2
}

for (movie of Object.keys(movieList)){
	console.log(movie, movieList[movie])
}
