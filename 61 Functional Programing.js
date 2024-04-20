//functional programing is the process of building software by composing pure functions, avoiding shared state, mutable data and side effects
//it is often declarative rather than imperative, and application state flows through pure functions
//map, filter, some/every, find/findindex and reduce
//essential concepts
//higher order functions
//pure functions
//immutability
//closure
//partial application / currying

//Imperative programming
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}

console.log(sum, "sum");

//Functional programming
console.log([1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0));
