let movieList = {
	saw: 5,
	theRing: 3,
	superman: 2
}



for (movie of Object.keys(movieList)){
	console.log("key:", movie)
}

for (movie in Object.values(movieList)){
	console.log("value", movie)
}

for (movie of Object.keys(movieList)){
	console.log(movie, movieList[movie])
}
