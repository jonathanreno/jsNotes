/*
consider this piece of code.

run it
*/

let thirdCall = () => console.log('i happen third')

console.log('i happen first')

setTimeout(thirdCall, 3000);

console.log('i happen second')

/*
if js is single threaded then how did this happen?

the workaround is that js lets the browser handle certain tasks,
like the settimeout method. js CALLS the method but the browser is actually doing work, while js continues to execute its code written after the method being handled by the browser.

this way, js doesnt get hung up by something that takes a lot of time
  
}


/*
the js call stack recognizes these web api calls.

once the browser's web api call is finished doing its task, it is pushed back onto the as a 'callback'