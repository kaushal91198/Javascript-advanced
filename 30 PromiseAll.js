//Promise.all accepts an array of promises and return a new promise
//New Promise will resolve when every promise in array resolves, and will be rejected if any promise in array is rejected

const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log(e));

// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
