// Logic Building Problems

// Basic Problems

// 1.  Check whether a given number is even or odd

// function isEven(n) {
//     return n % 2 == 0 ? true : false;
// }

// console.log(isEven(2));
// console.log(isEven(32));
// console.log(isEven(1));


// 2. Program to print multiplication table of a number

// function table(n){
//     for (let i =1; i<=10; i++) {
//         console.log(n + "*" + i + "=" + n*i);
//     }
// }

// table(5);


// 3. Program to find sum of first n natural numbers

// function sum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }

// console.log(sum(5));
// console.log(sum(3));


// 4. Swap Two Numbers

// function swap(a, b){
//     let x = a;
//     a = b;
//     b = x;
//     console.log(`a is now b ${a}`);
//     console.log(`b is now a ${b}`);
//     return (a, b);
// }

// function swap(a, b){
//     console.log(`a is ${a} and b is ${b}`)
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(`a is  ${a}`);
//     console.log(`b is  ${b}`);
//     return (a, b);
// }

// swap(5, 6);


// 5. Find the number closest to n and divisible by m

// function closest(n, m) {
     
// }


// 6. The dice problem

// function dice(n){
//     if(n == 1) {return 6;}
//     else if(n == 2) {return 5;}
//     else if(n == 3) {return 4;}
//     else if(n == 4) {return 3;}
//     else if(n == 5) {return 2;}
//     else return 1;
// }


// console.log(dice(4))

// 7. Nth term of AP from First Two Terms

// function series(a1, a2, n){
//     let final;
//     let diff = a2 - a1;
//     for (let i=3; i<=n; i++){
//         final = a2 + diff;
//         console.log(`${i}th is ${final}`)
//         a2 = final; 
//     }
//     return final;

// }

// console.log(series(1, 3, 10))

// 8. Program to find Nth term of given Geometric Progression

// function gp(a, r, n){
//     let nth;
//     for (let i=2; i<=n; i++){
//         nth = a * r;
//         a = nth;
//     } return nth;
// }

// console.log(gp(2, 3, 5))

// 9. Program for sum of geometric series

// function sumGp(a, r, n){
//    let sum = a;
//    for(let i=1; i<n; i++){
//     console.log(`sum is ${sum}`);
//      a = a * r;
//      console.log(`sum is ${a} for ${i}`);
//      sum = sum + a;
//      console.log(`total ${sum}`);
//    }
//    return sum;
// }

// console.log(sumGp(1, 0.5, 3))


// 10. Program to find simple interest

// function simpleInterest(p, r, t) {
//    return ((p * r * t)/100)
// }

// console.log(simpleInterest(3000, 7, 1))


// 11. Program to find area of a circle

// function area(r) {
//   return Math.PI * r * r;
// }

// let area1 = area(5).toFixed(5);
// console.log(area1);




// Easy Problems


// 1. Sum of Digits of a Number

// function sumDigits(n) {
//   let sum = 0;
//   if (n == 0) return sum;
//   let newdigits = n.toString().split("");
//   for (let i = 0; i < newdigits.length; i++) {
//     sum = sum + +newdigits[i];
//   }
//   return sum;
// }

// console.log(sumDigits(6789));


// 2. Write a program to reverse digits of a number

// function reverse(n) {
//     let num = n.toString().split("");
//     let new1 = "";
//     for (let i = num.length - 1; i >= 0; i--) {
//       new1 = new1 + num[i];
//     }
//     return +new1;
// }

// console.log(reverse(123));


// 3. Introduction to Primality Test and School Method

// function primeNumber(n){
//     if(n <= 1) return false;

//     for(let i = 2; i<n; i++){
//         if(n % i == 0) return false;

//     } return true;

// }

// console.log(primeNumber(3));



// // 4. Check if a number is a power of another number

// function power(x, y){
//     if(x === 1) return y === 1;
//     for(let i = 0; x**i<=y; i++){
//       if(x**i === y) return true;
//     } 
//     return false;
// }

// console.log(power(1, 20))


//. 6. Check whether triangle is valid or not if sides are given

// function valid(a, b, c){
//    return (a + b > c) && (a + c > b) && (b + c > a);
// }


// 8. Factorial of a Number

// Iterative Solution

// function factorial(n) {
//   let final = 1;
//   if (n == 0) return 1;
//   else if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//       final *= i;
//     }
//     return final;
//   } else {
//     throw new Error("Put valid number");
//   }
// }

// Recursive Solution

// function factorial(n) {
//   if (n == 0 || n == 1) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(4));



// 9. Program for Square Root of Integer

// function squareRoot(n) {
//   let temp;
//   for (let i = 1; i <= n; i++) {
//     temp = i * i;
//     if (temp == n) return i;
//     if (temp > n) return i - 1;
//   }
// }

// function squareRoot(n) {
//   let low = 1;
//   let high = n;
//   let ans = 1;

//   if (n === 0 || n === 1) return n;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (mid * mid === n) return mid;

//     if (mid * mid < n) {
//       low = mid + 1;
//       ans = mid;
//     }
//     else {
//       high = mid - 1;
//     }
//   }
//   return ans;
// }

// console.log(squareRoot(60));



// 10. Sum of squares of first n natural numbers


// function squareSum(n) {
//     let sum = 0;

//     if(typeof n !== "number" || n<0) return "Provide the a valid number";
    
//     if(n === 1 ) return 1;
//     for (let i = 1; i <= n; i++) {
//         sum += i**2; 
//     }
//     return sum;
// }

// function squareSum(n) {
//     if(typeof n !== "number" || n<0) return "Please Enter Valid number";

//     if( n === 1 ) {return 1;}
//     else {
//         return n * n + squareSum( n-1 );
//     }
// }

// console.log(squareSum(8));


// 11. Pair Cube Count

// function cubicPair(n) {
//     let count = 0;
//     for(let i = 1; i<n; i++) {
//         for(let j = 0; j<n; j++) {
//             let sum = i**3 + j**3;
//             if(sum === n) count++
//         }
//     }
//     return count;
// }

// console.log(cubicPair(2))


// 12. Perfect Number

// function perfectNumber(n) {
//     let sum = 0;
//     for(let i = 1; i<n; i++){
//        if (n%i === 0) {
//        sum += i;
//        }
//     }

//     if(sum === n) {return true}
//     else {
//         return false;
//     }
// }

// console.log(perfectNumber(6))


// 13. Fizz Buzz

// function fizz(n) {
//   let final = [];
//   for (let i = 1; i <= n; i++) {
//     let s = "";
//     if( i%3 === 0) s +="Fizz";
//     if( i%5 === 0) s +="Buzz"
//     if( s === "") s += i;
//     final.push(s);
// }
// return final

// }
// console.log(fizz(20));


