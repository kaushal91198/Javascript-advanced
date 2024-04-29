//Objects of a superclass should be able to be replaced with objects of a sub class without affecting the correctness of the program
//Basically it's about ensuring that a sub class can stand in for for its parent class without causing any problem

class Bird {
  fly() {
    console.log("This birds can fly!!!");
  }
}

class Duck extends Bird {
  fly() {
    console.log("Duck flying!");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle flying!");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins don't fly");
  }
}

function makeBirdFlying(bird) {
  bird.fly();
}

const duck = new Duck();
const eagle = new Eagle();
const penguin = new Penguin();

makeBirdFlying(duck); //Works fine
makeBirdFlying(eagle); //Works fine
makeBirdFlying(penguin); //Works fine

//by principle

class Bird2 {}
class FlyingBird extends Bird2 {
  fly() {
    console.log("this bird is flying");
  }
}
class Duck2 extends FlyingBird {
  fly() {
    console.log("Duck flying!");
  }
}

class Eagle2 extends FlyingBird {
  fly() {
    console.log("Eagle flying!");
  }
}

class Penguin2 extends FlyingBird {
  fly() {
    throw new Error("Penguins don't fly");
  }
}

function makeBirdFly(bird) {
  if (bird instanceof FlyingBird) {
    bird.fly();
  } else {
    console.log("this bird can not fly :(");
  }
}

const duck2 = new Duck2();
const eagle2 = new Eagle2();
const penguin2 = new Penguin2();
