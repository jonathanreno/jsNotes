// Context matters in an array; therefore it matters in a spread object



const me = {
    name: 'jonathan', 
    age: 35, 
    height: '5\'9', 
    state: 'south carolina'
}

console.log(me)



/**
 *  const meInAnArray = [...me]
 * 
 *  This will throw an error saying object is not iterable
 */

 const meInAnArryAgain = [{...me}]

 console.log(meInAnArryAgain) // does not throw an error because it is in the correct context


