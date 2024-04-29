//A class should not be focused to implement interfaces it does not use.
//Javascript does not have interfaces in the way languages like JAVA or TypeScript do. but the principle can still be applied conceptually using duck typing or optional methods

//This principle promotes the creation of more targeted specific interfaces rather than a one size fits all interface
class Workable {
  work() {
    console.log("working on work");
  }
  eat() {
    console.log("eating some food ");
  }
  sleep() {
    console.log("taking the nap");
  }
}

function manageWork() {
  Worker.work();
}

class Workable {
  work() {
    console.log("working on work");
  }
}

class Eatable {
  eat() {
    console.log("eating some food ");
  }
}

class Sleepable {
  sleep() {
    console.log("Taking a nap");
  }
}

function manageWork(workable) {
  workable.work();
}
