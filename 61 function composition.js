//function composition is a mechanism of combining multiple functions to build a more complicated one
//we essentially build a pipeline where one function's return value is passed to the second function. we can chain the things
//together in

//The result of each function is passed to the next one.
//In Math, this can be expressed as f(g(x))

const add = (a, b) => a + b;
const square = (a) => a * a;

console.log(square(add(1, 3)));
console.log(add(square(1), square(3)));

const addAndSquare = (a, b) => square(add(a, b));

console.log(addAndSquare(3, 5));

//when composing functions together, it's often best to not use methods, but instead create independent functions with minimal number of arguments

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWord(str) {
  return str.split(" ");
}
function joinWithDash(array) {
  return array.join("-");
}

console.log(joinWithDash(splitWord(lowerCaseString("My Favourite Function"))));

//simple compose function
function compose(fn1, fn2) {
  return function (value) {
    return fn2(fn1(value));
  };
}

function repeatTwice(str) {
  return str.repeat(2);
}
function upperCase(str) {
  return str.toUpperCase();
}

console.log(compose(repeatTwice, upperCase)("2"));

//Fancy compose function
function composeFancy(...functions) {
  return function (value) {
    return functions.reduceRight((val, func) => func(val), value);
  };
}

const slugify = composeFancy(joinWithDash, splitWord, lowerCaseString);

console.log(slugify("My Favourite Function"));
