// Logic Building Problems

// Basic Problems

// 1.  Check whether a given number is even or odd

function isEven(n) {
    return n % 2 == 0 ? true : false;
}

console.log(isEven(2));
console.log(isEven(32));
console.log(isEven(1));


// 2. Program to print multiplication table of a number

function table(n){
    for (let i =1; i<=10; i++) {
        console.log(n + "*" + i + "=" + n*i);
    }
}

table(5);


// 3. Program to find sum of first n natural numbers

function sum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}

console.log(sum(5));
console.log(sum(3));


// 4. Swap Two Numbers

function swap(a, b){
    let x = a;
    a = b;
    b = x;
    console.log(`a is now b ${a}`);
    console.log(`b is now a ${b}`);
    return (a, b);
}

// function swap(a, b){
//     console.log(`a is ${a} and b is ${b}`)
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(`a is  ${a}`);
//     console.log(`b is  ${b}`);
//     return (a, b);
// }

swap(5, 6);


// 5. Find the number closest to n and divisible by m

// function closest(n, m) {
     
// }


// 6. The dice problem

function dice(n){
    if(n == 1) {return 6;}
    else if(n == 2) {return 5;}
    else if(n == 3) {return 4;}
    else if(n == 4) {return 3;}
    else if(n == 5) {return 2;}
    else return 1;
}


console.log(dice(4))

// 7. Nth term of AP from First Two Terms

function series(a1, a2, n){
    let final;
    let diff = a2 - a1;
    for (let i=3; i<=n; i++){
        final = a2 + diff;
        console.log(`${i}th is ${final}`)
        a2 = final; 
    }
    return final;

}

console.log(series(1, 3, 10))

// 8. Program to find Nth term of given Geometric Progression

function gp(a, r, n){
    let nth;
    for (let i=2; i<=n; i++){
        nth = a * r;
        a = nth;
    } return nth;
}

console.log(gp(2, 3, 5))

// 9. Program for sum of geometric series

function sumGp(a, r, n){
   let sum = a;
   for(let i=1; i<n; i++){
    console.log(`sum is ${sum}`);
     a = a * r;
     console.log(`sum is ${a} for ${i}`);
     sum = sum + a;
     console.log(`total ${sum}`);
   }
   return sum;
}

console.log(sumGp(1, 0.5, 3))


// 10. Program to find simple interest

function simpleInterest(p, r, t) {
   return ((p * r * t)/100)
}

console.log(simpleInterest(3000, 7, 1))


// 11. Program to find area of a circle

function area(r) {
  return Math.PI * r * r;
}

let area1 = area(5).toFixed(5);
console.log(area1);




// Easy Problems


// 1. Sum of Digits of a Number

function sumDigits(n) {
  let sum = 0;
  if (n == 0) return sum;
  let newdigits = n.toString().split("");
  for (let i = 0; i < newdigits.length; i++) {
    sum = sum + +newdigits[i];
  }
  return sum;
}

console.log(sumDigits(6789));


// 2. Write a program to reverse digits of a number

function reverse(n) {
    let num = n.toString().split("");
    let new1 = "";
    for (let i = num.length - 1; i >= 0; i--) {
      new1 = new1 + num[i];
    }
    return +new1;
}

console.log(reverse(123));


// 3. Introduction to Primality Test and School Method

function primeNumber(n){
    if(n <= 1) return false;

    for(let i = 2; i<n; i++){
        if(n % i == 0) return false;

    } return true;

}

console.log(primeNumber(3));



// 4. Check if a number is a power of another number

function power(x, y){
    if(x === 1) return y === 1;
    for(let i = 0; x**i<=y; i++){
      if(x**i === y) return true;
    } 
    return false;
}

console.log(power(1, 20))