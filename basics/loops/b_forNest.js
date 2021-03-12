const a = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];


let total = 0;
let result = 0;
for (let i = 0; i < a.length; i++) {
	let row = a[i];
	for (let j = 0; j < row.length; j++) {
		total+= row[j];
		
	}
}
