const Person = require("./classes");
let day = "tuesday ";
console.log(day.length); //8
console.log(day.slice(0, 5)); //tuesd
console.log(day[1]); //u
//tue day
let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
diff.toString();

let newQuote = day + "is funday day";
console.log(newQuote);
let val = newQuote.indexOf("day", 5);
console.log(val);
//tuesday is funday
let count = 0;
let value = newQuote.indexOf("day");
while (value != -1) {
  count++; //2
  value = newQuote.indexOf("day", value + 1);
}
console.log(count);

let person = new Person("Keshav", "Jha");
console.log(person.fullName());
