function asyncFunction(callback, time){
   return new Promise((resolve) => {
    setTimeout(() => {
        callback();
        resolve();
    }, time);
   })
}

function custom() {
    console.log("Hi there!");
}

console.log("Before");

asyncFunction(custom,3000).then(() => {
    console.log("Promised is resolved")
});

console.log("After");

