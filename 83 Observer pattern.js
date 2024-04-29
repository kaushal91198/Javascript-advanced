//Javascript's event handling in browsers (DOM event listeners) is built upon the observer pattern
//The observer pattern enables a subscription model where objects (observers) "listen" to events and get notified when event occurs
//When something changes in the state of the subject, the observers are notified

class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter((o) => o !== fn);
  }
  notify(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

const observer1 = (data) => console.log(`OBSERVER DATA 1`, data);
const observer2 = (data) => console.log(`OBSERVER DATA 2`, data);
const observer3 = (data) => console.log(`OBSERVER DATA 3`, data);
const observer4 = (data) => console.log(`OBSERVER DATA 4`, data);

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.subscribe(observer4);
subject.notify("click");

//Vuejs uses a reactive data model where component rerenders are triggered by data changes, which is an application of the observer pattern
