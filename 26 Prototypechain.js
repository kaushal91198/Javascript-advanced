const grandParent = {
  greet() {
    return "Good mornighn";
  },
};

const parent = {
  color: "Purple",
  sing() {
    return "La La";
  },
  __proto__: grandParent,
};

// const child = {
//   num: 2,
// };

// console.log(child.sing()); // undefined
//we can inherit proto

const child = {
  num: 2,
  __proto__: parent,
};

console.log(child.__proto__);

// const child = {
//     num: 2,
//     obj: parent,
//   };

//we can't use it this way

console.log(child.greet);
console.log(child.__proto__.__proto__);
