const user = {
  username: "rakesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to this wonderful website`); // here we use "this" in the reference of current context
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this);

// function chai() {
// let username = "rakesh";
// console.log(this.username);
// }

// chai();   // This gives the "undefined" output

// const chai = function () {
//   let username = "rakesh";
//   console.log(this.username);  // this fxn also gives the "undefined" output
// };

const chai = () => {
  // This is known as "arrow" function
  let username = "rakesh";
  console.log(this); // this also gives "undefined answer if you use username along with this"
};

// chai();

// +++++++++++++++++++++++++++++++++++++ ARROW Function +++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//   return num1 + num2;  // explicit return (matlab explicitly lagana padha raha)
// };
const addTwo = (num1, num2) => num1 + num2; // Impliciet return

const Twoadd = (num1, num2) => num1 + num2;

console.log(addTwo(3, 4));

const addOject = (num1,num2) => ({username: "rakesh"}) // to return object use {}

console.log(addOject(4,5))

// Revist the topic to understand the Topic better


