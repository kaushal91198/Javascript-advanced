//currying
//A curried function can be called with any number of arguments - if you call it with fewer args than it takes one argument and call another function that takes one arument
// but the core concept is just evaluating functions that have multiple arguments and decomposing them into a sequence of functions that take a single argument

function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurry(1)(2)(3));

//fancier currying function

function curry(fn) {
  return function curried(...args) {
    // console.log(fn.length, "fn"); // it gives you the funcion argument length
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

console.log(curry(add)(1)(3)(2), "asnjk");
console.log(curry(add)(1, 2)(3), "asnjk");
console.log(curry(add)(1, 3, 2), "asnjk");

// Let's break down how the curry function works, step by step:
// Step 1: Defining the curry Function
// javascriptCopy code
// function curry(fn) {
//     • What it does: Takes a function fn as an argument. This fn is the function that will be curried, meaning it will be transformed into a sequence of functions, each taking one or more arguments.
// Step 2: Returning the curried Function
// javascriptCopy code
//   return function curried(...args) {
//     • What it does: Returns a new function, named curried, which can take any number of arguments (...args - this uses JavaScript's rest parameters syntax to collect arguments into an array).
//     • Purpose: This function checks if it has received enough arguments to call the original function fn. If not, it returns another function to collect more arguments.
// Step 3: Checking Arguments Length
// javascriptCopy code
//     console.log(fn.length, "fn"); // it gives you the function argument length
//     if (args.length >= fn.length) {
//     • What it does: Uses fn.length to check the number of parameters expected by the original function fn, and compares it with the length of args, which represents the number of arguments curried has currently received.
//     • Purpose: Determines if curried has received enough arguments to call the original function fn. If so, it proceeds to call fn with these arguments. Otherwise, it returns another function to gather more arguments.
// Step 4: Invoking the Original Function
// javascriptCopy code
//       return fn.apply(this, args);
//     • What it does: If enough arguments have been gathered (args.length >= fn.length), it calls the original function fn with the collected arguments. The apply method is used to call fn with a given this value and arguments provided as an array (or array-like object).
// Step 5: Returning a Function to Gather More Arguments
// javascriptCopy code
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }
//     • What it does: If not enough arguments have been received, it returns a new function that takes the next set of arguments (...args2).
//     • Purpose: This function, when called, will concatenate the new arguments (args2) with the previously received arguments (args) and recursively call curried with the updated arguments list. This process continues until enough arguments are collected to invoke the original function fn.
