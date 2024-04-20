//The ability for inner functions to remember variables defined in outer functions, long after the outer function has returned
function outerFunc() {
  let outerVariable = "I m from outer!";
  function innerFunction() {
    console.log("I m inner function", outerVariable);
  }
  return innerFunction;
}

outerFunc()();

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}
// if we wanna generate the id
const nextId = idGenerator();
console.log(nextId());
console.log(nextId());
console.log(nextId());
console.log(nextId());
console.log(nextId());

//we want to try and avoid global variables whenever possible. so what a closure allows me to do is have a little bit of persistance, have some data that is basically shielded

// one of the benefits of closures is that they allow us to create what are basically private varibles

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
}
//using IIFE
// const count = (function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       return count++;
//     },
//     decrement: function () {
//       return count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();
const count = createCounter();

console.log(count.increment());
console.log(count.decrement());
console.log(count.getCount());
console.log(count.increment());
console.log(count.decrement());
console.log(count.getCount());
console.log(count.increment());
console.log(count.decrement());
console.log(count.getCount());
console.log(count.increment());
console.log(count.decrement());
console.log(count.getCount());

//so closures allows us to create this sort of private variable where I can hide something and it's not hidden

//Factory functions -> function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.

function createExponentFunction(exp) {
  return function (val) {
    return val ** exp;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

console.log(square(8));
console.log(cube(8));
console.log(square(9));
console.log(cube(9));
console.log(square(10));
console.log(cube(10));

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const pre = uniqueIdGenerator("book");
console.log(pre());
console.log(pre());
console.log(pre());

//closure with for loop

for (var i = 0; i < 6; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000 * j);
  })(i);
}
