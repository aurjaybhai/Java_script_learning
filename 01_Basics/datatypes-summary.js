// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
// Think of Symbols Like Social Security Numbers
const id = Symbol("123"); // Imagine two people with the same name "John Smith". Even though they have the same name, they have different Social Security Numbers.
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 65455154554564646444n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];
let myObj = {
  name: "rakesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log("Type of another ID :", typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname = "rakeshchodotcom";

let anotherName = myname;
anotherName = "david";

console.log(anotherName); // david
console.log(myname); //rakeshchodotcom (you get a photocopy so the original is not changed)

let userOne = {
  email: "user@google.com",
  upi: "user@upi",
};

let userTwo = userOne;

userTwo.email = "aurbhai@google.com";

console.log(userOne.email); // aurbhai@google.com
console.log(userTwo.email); // aurbhai@google.com

/*Checkout the stack vs heap (memory) html file in which the concept is explained
where easily in simple language*/
