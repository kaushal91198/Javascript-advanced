//The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.

const id = setInterval(() => {
  console.log("called");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 3001);
