//Referential transparency - the function always gives the same return value for same arguments
// the function can't depend on any mutable state
//side effects free : the function can not cause any side effects
// side effects may include I/O (eg, writing to the console or a log file), modifying a mutable object, reassigning a variable,etc.

//impure functions
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}

squareAndUpdateValue(2);

//pure function
function square(num) {
  return num * num;
}
square(2);

//it is impure function because it is mutating some external piece of state and it has side effect
const colors = ["red", "blue"];
function addTOArray(arr, value) {
  return arr.push(value);
}
addTOArray(colors, "green");
console.log(colors);

//pure functions
function addTOArray(arr, value) {
  return [...arr].push(value);
}
