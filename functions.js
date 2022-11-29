//block of code

function add(a, b) {
  return a + b;
}
let sum = add(2, 3);
console.log(sum);
//do not have name => anonymous functions -- function expressions

let sumOfIntegers = function (c, d) {
  return c + d;
};
console.log(sumOfIntegers(2, 3));

let sumOfNumbers = (e, f) => e + f;
console.log(sumOfIntegers(2, 3));
