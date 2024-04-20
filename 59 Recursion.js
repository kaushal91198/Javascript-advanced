//Factorial
function factorial(n) {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
}

console.log(factorial(5));

//Recursive approach
function recFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recFactorial(n - 1);
}
console.log(recFactorial(5));
