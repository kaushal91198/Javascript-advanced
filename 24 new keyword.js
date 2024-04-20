class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return "Woof";
  }
}
// console.log(Dog("name", "breed")); // throws error

// the new keyword does four things:
// 1. Creates an empty object
// 2. Sets the keyword this to be that object
// 3. Returns the object - returns this
// 4. Creates a link to the object's prototype

function dog(name, breed) {
  console.log(this);
  this.name = name;
  this.breed = breed;
}
// normal function is constructor function

console.log(dog("dog", "breed")); //  undefined

// with new keyword it generates the function

console.log(new dog("dog", "breed"));
