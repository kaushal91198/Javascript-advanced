let x = 5;
let y = ++x; // add 1 to x then evaluate: y and x are both 6
console.log(x, y);
let z = 5;
let a = z++; // evaluate z and set a that, then add 1 to z
console.log(z, a);

//using x++ is often useful as a return statement - return this value to caller, but bump up for next time:
class Counter {
  constructor() {
    this.current = 1;
  }
  next() {
    return this.current++;
  }
  pre() {
    const curr = this.current;
    ++this.current;
    return curr;
  }
}
const counter = new Counter();
console.log(counter.next(), counter);
console.log(counter.pre(), counter);
