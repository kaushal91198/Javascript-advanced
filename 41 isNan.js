//javascript's NAN value can be tricky. it often comes from:
// -Logical math errors, like 0/0
// imaginary numbers like Math.sqrt(-1)
// conversion errors, like number('nope')

//Checking for NAN
//All nan values are considered unique, So NAN===NAN is false
//if you need to check for NAN, there are two different ways:

console.log(NaN === NaN, 0 / 0); //false
console.log(isNaN(0 / 0)); //false

console.log(Number("asdsa")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(0)); // 0
console.log(Number([])); // 0

//isNaN(n)
//This returns true if n is NaN or is a value that can't be coerced into a number
console.log(isNaN(0 / 0)); //true
console.log(isNaN("nope")); //true

//Number.isNaN(n)
//this returns true if n is NaN - everything else returns false
console.log(Number.isNaN(0 / 0)); //true
console.log(Number.isNaN("nope")); //false
