function multipleBy5(num) {
  this.num = num;
  return num * 5;
}

// console.log(multipleBy5(5))

multipleBy5.power = 2;

console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // gives the empty string
// summary is : function can also behave as Object if you want

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++; // jisne be bullaya h uska score increase kardo
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 25); // don't forget to add new
const tea = new createUser("tea", 250); // don't forget to add new

chai.printMe();
