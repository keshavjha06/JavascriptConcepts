//var - scope is global level if declared in global/scope is function level if declared in funtion level
//let if declared at global level scope will be at global level/block level {}
//const - cannot be reinitialised,but both var and let can be reinitialised
let greet = "Evening";
greet = "night";
if (1 == 1) {
  let greet = "Afternoon";
}
function add(a, b) {
  let greet = "Morning";
  return a + b;
}
let sum = add(2, 3);
console.log(sum);
console.log(greet);
