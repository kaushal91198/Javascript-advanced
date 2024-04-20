//array.from basically helps us with generating new arrays from some sort of initial array
console.log(Array.from("Hello")); //[ 'H', 'e', 'l', 'l', 'o' ]
console.log(Array.from([1, 2, 3, 4, 5])); //it will copy the array [1, 2, 3, 4, 5]
console.log(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 3, 1, 2, 4, 5, 6]));

//we can also pass the second argument wwhich is mapping function
console.log(Array.from("Kaushal", (x) => x.toUpperCase()));

let newSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(Array.from(newSet, (x) => x + 10));
console.log(Array.from({ length: 10 }, (x) => Math.random()));
