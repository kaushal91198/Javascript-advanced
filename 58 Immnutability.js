// immutability is basically the idea of ensuring that once a piece is created, usually we are talking about the data structures like arrays and objects. once it is created, it can't be changed

//this don't mutate the original array and they make a copy
function push(arr, val) {
  return [...arr, val];
}
push([1, 2, 3, 4, 5, 6], 7);

function removeLastItem(arr) {
  return arr.slice(0, -1);
}
removeLastItem([1, 2, 3, 4, 5, 6]);
