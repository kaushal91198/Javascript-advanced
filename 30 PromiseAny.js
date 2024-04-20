//Promise.any
//it takes any iterable of promise objects and returns a promise that is fulfilledby the first given promise to be fulfilled,
// or rejected if all of given promises are rejected.

// Promise.any(): It takes an iterable of Promise objects and returns a single promise that resolves as soon as any of the promises in the iterable fulfills. It ignores rejected promises unless all of the passed promises are rejected. If all promises are rejected, Promise.any() returns a AggregateError, a new error type that groups together individual errors.

// Promise.race(): It also takes an iterable of promises but returns a promise that settles as soon as one of the promises in the iterable settles. "Settles" means that it either fulfills or rejects. In other words, Promise.race() will return the result or error from the first promise that settles, regardless of whether it's a resolution or rejection.

// 2. Use Cases
// Promise.any() is used when you are interested in the first successful result from a list of promises, disregarding any failures unless everything fails. It's useful in scenarios where you want to attempt multiple sources or strategies and only need one to succeed.

// Promise.race() is useful for timeout patterns, where you race a promise against a timeout and want to take action on whichever happens first, regardless of whether the promise is fulfilled or rejected. It can also be used in any situation where the first result (success or failure) is the only one you care about

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));

const promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((e) => console.log(e));
