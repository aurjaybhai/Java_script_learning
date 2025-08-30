//  singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "rakesh",
  "full name": "rakesh sharma",
  [mySym]: "mykey1", // to use it as symbol use square bracket
  age: 19,
  location: "sikkim",
  email: "rakesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email); // # Method 1
// console.log(JsUser[email]); // incorrect way to access the email property of JsUser object
console.log(JsUser["email"]); // # Method 2

console.log(JsUser["full name"]);

console.log(typeof JsUser[mySym]);

JsUser.email = "rakesh@anthropic.com";
// Object.freeze(JsUser); // telling javascript to make no changes in "JsUser"
JsUser.email = "rakesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

console.log(JsUser.greeting()); // this returns the "undefined bcoz function does not return anything"
console.log(JsUser.greeting); // REFERENCES the function ... Just shows what the function looks like

JsUser.greetingTwo = function () {
  console.log(`Hello js user , ${this.name}`);
};

console.log(JsUser.greetingTwo());

