//sometimes you may want to send off a whole bunch of asynchronous operations, some of which may work some may not some will be resolved and some will be rejected and you might want with them or handle them differently on your own
//Promise.allSettled accepts an array of promises and return a new promise
//so new promise resolved after all of the given promises have either fullfiled or rejected, with an array of objects that describes the outcome of each promise

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => console.log(results));
