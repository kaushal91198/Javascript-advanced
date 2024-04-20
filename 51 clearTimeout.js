//Clears a timeout set with setTimeout, preventing the function from executing

const id = setTimeout(() => {
  console.log("called");
}, 4000);

setTimeout(() => {
  console.log("clearTimeout called");
  clearTimeout(id);
}, 3001);
