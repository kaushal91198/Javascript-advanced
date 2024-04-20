// It generates a new function where the value of the context is bound, and its always bound to whatever we want it to be
// So In call method it doesn't make me a new function that calls it one time with fluffy as context
// but in bind function this returns to me a new function

const obj = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const bindObj = {
  firstName: "Kaushal",
  lastName: "Panchal",
};

console.log(obj.fullName.call(bindObj));
console.log(obj.fullName.call(bindObj));
console.log(obj.fullName.call(bindObj));
console.log(obj.fullName.call(bindObj));
console.log(obj.fullName.call(bindObj));

//here I need to call at every time, call the fullname with context of bindObj

// in case of bind it always return function
const func = obj.fullName.bind(bindObj);
func();

//here also we can provide the arguments
function applySalesTax(price, taxRate) {
  console.log(price, taxRate);
  return price * taxRate;
}

//null here means it doesn't matter what "this" is
//so here tax rate is not bind but the bind the tax rate (second argument

const applyCASalesTax = applySalesTax.bind(null, 0.26);

console.log(applyCASalesTax(12));
console.log(applyCASalesTax(14));
