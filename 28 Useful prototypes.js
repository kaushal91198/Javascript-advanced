const person = {
  sing() {
    return "Lalalalaalalal";
  },
  isHuman: true,
};
//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
console.log(Object.create(person)); // {}
console.log(Object.create(person).sing());
console.log(Object.create(person).isHuman);

//The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
console.log(Object.getPrototypeOf(person));

//The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
console.log(Object.setPrototypeOf(person, { isHuman: false }));
