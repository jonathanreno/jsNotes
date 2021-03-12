/**
 * The arguments Object is an old way of providing an unknown/'unlimited' number of parameters in a function or method
 */

 const sum = () => {
    const args = [...arguments]
    return args.reduce((total, currentVal) => {
        return total + currentVal
    })
 }

