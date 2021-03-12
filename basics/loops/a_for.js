const a = [1, 2, 3, 4, 5]

const b = [6, 7, 8, 9, 10]

const c = [11, 12, 13, 14, 15]

const d = [a, b, c]

console.log("regular for loop\n_______________")
for (let i = 0; i < a.length; i++){
        console.log(a[i])
}
                                                                                                    

total = 0
console.log("nested for loop\nget total\n------")
for (let i = 0; i < d.length; i++){
        for (let j = 0; j < d[i].length; j++){
                total += d[i][j]
                console.log(total)
        }

}
