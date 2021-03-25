// js is single threaded
// run this in the browser

console.log('i happen first')
alert('i happen second')
console.log('i happen third')

/*
youll notice that the console log AFTER the alert method does NOT run until the alert method is fully complete..

being single threaded doesnt allow multiple lines of code to run simultaneously

callbacks are a way around this js feature