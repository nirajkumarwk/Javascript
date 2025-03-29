// implement clearAllTimeout()

(() => {
    const ids = [];
    const originalSetTimeout = window.setTimeout;
    const originalClearTimeout = window.clearTimeout;
    
    window.setTimeout = function (callback, delay, ...args) {
      const id = originalSetTimeout(() => {
        callback(...args);
    
        const index = ids.indexOf(id);
        if (index !== -1) {
          ids.splice(index, 1);
        }
      }, delay);
      ids.push(id);
      return id;
    };
    
    window.clearTimeout = function (id) {
      const indexId = ids.indexOf(id);
      if (indexId !== -1) {
        ids.splice(indexId, 1);
        originalClearTimeout(id);
      }
      return indexId;
    };
    
    window.clearAllTimeout = function() {
      ids.forEach((id) => {
        originalClearTimeout(id);
      });
    
      ids.length = 0;
    }
    })();




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


 // Create sum()

 function sum(num) {
   function inner(num2) {
     return sum(num + num2);
   }

   inner.valueOf = function () {
     return num;
   };
   return inner;
 }
 

 const sum1 = sum(1)
console.log(sum1(2) == 3) // true
console.log(sum1(3) == 4) // true
console.log(sum(1)(2)(3)) == 6 // true
console.log(sum(5)(-1)(2) == 6) // true




// undefined to null

function undefinedToNull(arg) {
  if (Array.isArray(arg)) {
    return arg.map((value) =>
      value === undefined ? null : undefinedToNull(value)
    );
  }

  if (typeof arg === "object" && arg !== null) {
    let ne = Array.isArray(arg) ? [] : {};
    for (const [key, value] of Object.entries(arg)) {
      if (typeof value === "object") {
        ne[key] = undefinedToNull(value);
      }

       else if (value === undefined) {
        ne[key] = null;
        console.log((ne[key] = null));
      } else {
        ne[key] = value;
      }
    }
    return ne;
  } else {
    return arg;
  }
  
}

console.log(undefinedToNull([undefined]))
console.log(undefinedToNull({undefined}))
console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}))
console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}))


// Implement basic debounce()

function debounce(func, wait) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, wait);
    }

}

const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
  }, 300);
  
  // Simulate user typing fast
  debouncedSearch("H");
  debouncedSearch("He");
  debouncedSearch("Hel");
  debouncedSearch("Hell");
  debouncedSearch("Hello");