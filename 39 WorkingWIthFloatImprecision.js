//Javascript represents numbers as floating point, like 1.234 sometimes, this leads to mildly imprecise results
// 0.1+0.2 === 0.300000000000000000000000000004
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.30000000000000004);
console.log(0.1 + 0.2 === 0.3);

//Javascript may not be the best language if you are working with really small floats and you need things to be very
//precise or not even really small floats

function areFloatsEqual(a, b, epsilon = 1e-10) {
  return Math.abs(a - b) < epsilon;
}
console.log(areFloatsEqual(0.3, 0.1 + 0.2));
