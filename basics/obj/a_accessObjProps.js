const obj1 = {
	prop1: "property 1",
	prop2: 100,
	300: "property 3",
	400: 4,
	"99 bananas": "good song"

};

console.log(obj1.prop1);
console.log(obj1.prop2);
console.log(obj1[300]);
console.log(obj1[400]);
console.log(obj1["99 bananas"]);

mystery_property = 400;

console.log(obj1[mystery_property]);
