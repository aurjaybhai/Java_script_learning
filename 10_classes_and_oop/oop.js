// Object Literal

const user = {
  username: "rakesh",
  loginCount: 8,
  signedIn: true,

  getUsersDetails: function () {
    // console.log("Got User details from database");
    console.log(`Username : ${this.username}`); // we need to add this so that it looks outside the function
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUsersDetails());
console.log(this); // In global EC this return empty string

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  //   return this;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

const userOne = new User("hitesh", 12, true); // Use new keyword so that the value don't get overwritten
const userTwo = new User("Coffee_and_code", 11, false);

console.log(userOne.constructor); // it's property about yourself
console.log(userTwo);

/*
empty object create hota usko instance bolte h
constructor fxn call hota(new keyword) ke karn
this keyword uske andhar inject hojate h

*/
