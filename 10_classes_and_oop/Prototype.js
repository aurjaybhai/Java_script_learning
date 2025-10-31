let Name = "satya    ";

console.log(Name.length);
// console.log(Name.trim().length);

// console.log(Name.trueLength)

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};

Object.prototype.god = function () {
  console.log(`God is Present everywhere(/)`);
};

// heroPower.god();

Array.prototype.heyworld = function () {
  console.log(`hello world`);
};

myHeros.heyworld(); // this will work but it will not work when you use with
// string or IT'S NOT OBJECT (/)

// Inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAsssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "CoffeeandCode     ";

String.prototype.trueLength = function () {
  console.log(`$this`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"rakesh".trueLength;
"rahul".trueLength;


