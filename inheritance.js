//Inheritance is the main pillar in oop
//one class can inherit/acquire the properties,methods of another class
//The class which inherits the properties is subclass
//The class whose properties are inherited is superclass
const Person = require("./classes");
class Pet extends Person {
  get location() {
    return "BlueCross";
  }
  constructor(firstName, lastName) {
    //call parent class constructor
    super(firstName, lastName);
  }
}

let pet = new Pet("sam", "san");
pet.fullName();
console.log(pet.location);
