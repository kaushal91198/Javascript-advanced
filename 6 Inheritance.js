//Instead of duplicating code, we can ineritIT functionality from a parent class
//we can also call child class as sub class and parent class as superclass

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  

console.log(new Model("Ford", "Mustang").show())


//when you have the child class or base class, in our case we may need to call that parent class constructor
//you don't need to write super if you are relying on parent class's constructor entirely 
// but if you are adding some stuff in, if you are adding your own properties, you want to have your own constructor
//then you will have to call the parent class constructor using super and you pass the values through