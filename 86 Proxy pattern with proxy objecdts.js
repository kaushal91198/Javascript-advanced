// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
//The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.
// You create a Proxy with two parameters:

// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
// For example, this code creates a proxy for the target object.

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {
  get: function (obj, property) {
    // return "LOL";
    return obj[property];
  },
  set: function (obj, property, value) {
    obj[property] = value;
  },
};

const proxy1 = new Proxy(target, handler1);
console.log(proxy1.message1, "proxy1");

//Proxying the function calls
//used for logging if we have some issues
function multiply(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function (targetFunc, thisArg, argsList) {
    console.log("ran the function");
    targetFunc(...argsList);
  },
};

const multiplyProxy = new Proxy(multiply, handler);
const sumProxy = new Proxy(sum, handler);
