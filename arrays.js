let marks = Array(6);
let marks1 = new Array(20, 30, 41, 12, 35, 66);
var marks2 = [20, 30, 40, 12, 44, 78];
console.log(marks2[2]); //40
marks2[3] = 14;
console.log(marks2); //[ 20, 30, 40, 14, 44, 78 ]
console.log(marks.length); //6
marks2.push(64);
console.log(marks2); //[20, 30, 40, 14,44, 78, 64]
marks2.pop(64);
console.log(marks2); //[20, 30, 40, 14,44, 78]
marks2.unshift(12);
console.log(marks2); //[12, 20, 30, 40,14, 44, 78]
console.log(marks2.indexOf(30));
console.log(marks2.includes(120)); //checks the element is present in array or not
console.log(marks2.slice(0, 3));
let sum = 0;
for (let index = 0; index < marks2.length; index++) {
  //console.log(marks2[index]);
  sum = sum + marks2[index];
}
console.log(sum);
//reduce filter map(iterate and update values,use reduce method)
let total = marks2.reduce((sum, mark) => sum + mark, 0);
console.log(total);
var scores = [12, 13, 14, 16];
var evenScores = [];

//create a new array with even numbers of scores and multiply with each value with 3 and sum the array [12,14,16]
for (let index = 0; index < scores.length; index++) {
  if (scores[index] % 2 == 0) {
    evenScores.push(scores[index]);
  }
}
console.log(evenScores); //[ 12, 14, 16 ]
let newFilterEvenScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScores); //[ 12, 14, 16 ] => [36, 42, 48]
//map
let mappedArray = newFilterEvenScores.map((score) => score * 3);
console.log(mappedArray); //[ 36, 42, 48 ]
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalVal);
var scores1 = [12, 13, 14, 16];
let sumValue = scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);
console.log(sumValue);

let fruits = ["banana", "mango", "apple", "grapes"];
console.log(fruits.sort());
console.log(fruits.reverse());
var scores1 = [12, 003, 19, 16, 14];
console.log(scores1.sort((a, b) => a - b));
console.log(scores1.sort((a, b) => b - a));
