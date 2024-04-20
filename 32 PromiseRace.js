//Many calls,First one wins
//another pattern we might want is the ability to send out a whole bunch of operations, and then handle very first one that either rejected or fullfilled
//Promise.race accepts an array of promises and return a new promise
// this new promise will resolve or reject as soon as one promise in the array resolves or reject

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
