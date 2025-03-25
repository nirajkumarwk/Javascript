//  implement curry()

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...newArgs) => curried(...args, ...newArgs);
        }
    }
}


const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 const curriedJoin = curry(join)
 console.log(curriedJoin(1, 2, 3)) // '1_2_3'
 console.log(curriedJoin(1)(2, 3)) // '1_2_3'
 console.log(curriedJoin(1, 2)(3)) // '1_2_3'