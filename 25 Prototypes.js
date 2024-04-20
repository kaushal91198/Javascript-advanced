//Prototypes are the basic mechanism that gives js objects ability to inherit features and functionality from each other
//every js object has a special built in property which is called prototype and that prototype is itself and object which can have its own prototype making what we call the prototype chain
console.log(dog.__proto__);

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} ${this.breed} says woof`;
  }
}

console.log(new Dog("aussies", "melton")); // Dog { name: 'aussies', breed: 'melton' }

function dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.bark = function () {
    return `${this.name} ${this.breed} says woof`;
  };
}

console.log(new dog("aussies", "melton")); //dog { name: 'aussies', breed: 'melton', bark: [Function] }

// so here I m telling js everytime I make a dog, that dog should have a name and breed but
// also have own copy of bark
// so here every time the method would be duplicated when you create the new instance
// when you compare this two function new dog("aussies", "melton").bark === new dog("aussies2", "melton").bark it returns false
// but with classes it is different

console.log(
  new dog("aussies", "melton").bark === new dog("aussies", "melton").bark
); // false
console.log(
  new Dog("aussies", "melton").bark === new Dog("aussies", "melton").bark
); // true

dog.prototype.commonMethod = function () {
  return `${this.name} says woof`;
};
//we can also add the method in prototype
console.log(
  new dog("aussies", "melton").commonMethod ===
    new dog("aussies", "melton").commonMethod
); // true

// the new keyword does four things:
// 1. Creates an empty object
// 2. Sets the keyword this to be that object
// 3. Returns the object - returns this
// 4. Creates a link to the object's prototype
console.log(new dog("aussies", "melton").__proto__);
// the prototype object has a property called construtor which points back to the function

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }
  alert() {
    return `${this.name} alerts you to danger. Good dog`;
  }
}

console.log(new GuideDog("dog", "breed", "kaushal").bark());
console.log(new GuideDog("dog", "breed", "kaushal").__proto__.__proto__);
