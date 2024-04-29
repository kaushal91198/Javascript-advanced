//The Moulde pattern ensures private and public encapsulation in javascript, protecting the global namespace and diminishing naming conflicts.
//The module pattern basically involves creating modular encapsulated code through the use of immediately invoked function expressions
const chickenModule = (() => {
  const eggColor = "white"; //private variable
  const cluck = () => console.log("Cluck! Cluck!"); //private function
  return {
    layEgg: () => {
      console.log("Laid a", eggColor, "egg.");
      cluck();
    },
  };
})();

//here I can't access the private variable and private function directly
chickenModule.layEgg();

const count = (() => {
  let count = 1;
  return {
    getCount: () => count,
    incrementCount: () => count++,
  };
})();

//here count variable can't be exposed directly
console.log(count.getCount());

//Real world examples
//Jquery uses module pattern to protect internal details and reveal only public API
//RequireJs is an open source library that manages module loading and dependencies, implementing a variation of the module pattern
