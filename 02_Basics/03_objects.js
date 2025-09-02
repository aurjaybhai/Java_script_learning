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

console.log(JsUser["full name"]); // like this type of you can access with them with only Method#2

console.log(typeof JsUser[mySym]);
// This checks the type of the VALUE stored at the Symbol key, not the Symbol itself
// Since you assigned the string "mykey1" to this Symbol key, it returns "string"
// If you had assigned a number like 42, it would return "number"
// If you had assigned an object, it would return "object", etc.

JsUser.email = "rakesh@anthropic.com";
// Object.freeze(JsUser); // telling javascript to make no changes in "JsUser"
JsUser.email = "rakesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

console.log(JsUser.greeting()); // this returns the "undefined bcoz function does not return anything"
// const func = function() {
//   console.log("Hello from function (with return)"); // return should be there
//   return "Greeting successful!";
// };
console.log(JsUser.greeting); // REFERENCES the function ... Just shows what the function looks like

JsUser.greetingTwo = function () {
  console.log(`Hello js user , ${this.name}`);
};

console.log(JsUser.greetingTwo());
