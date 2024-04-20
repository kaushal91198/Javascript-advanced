//Higher order functions
// A function that receives another function as an argument, returns a function, or does both

function doTwice(func) {
  func();
  func();
}
doTwice(() => console.log("internal func called"));

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(5), double(5));
