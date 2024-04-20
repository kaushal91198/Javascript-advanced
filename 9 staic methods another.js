//examples
// one is just use static methods to just group functionality together in some sort of class, just to have
// nice, usable group of functions that makes sense to be put together
// Another option is to use static methods as factories, s factory functions that generate new instances

// factory function - In JavaScript, a factory function is a function that returns an object. It's called a
// factory function because it creates and returns a new object each time it's called, just like a factory 
// creates and produces new products.

///this is second case example

class Cat {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
  
    static registerStray() {
      const names = [
        "Muffin",
        "Biscuit",
        "Sleepy",
        "Dodo",
        "Princess Butterface",
      ];
      const name = choice(names);
      return new Cat(name, "unknown");
    }
    meow() {
      return `${this.name} says meow`;
    }
  }
  
  function choice(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
  }
  