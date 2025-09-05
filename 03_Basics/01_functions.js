function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("K");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName();

// function addTwoNumbers(number1, number2) {
//   // jab aap functions ke defination bante h tab jo input dete
//   // h wo hots "PARAMETERS"
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  // console.log("hello"); // After "return" it does not work
}

// addTwoNumbers(3, 5); // jab aap funtion ko call karte samay bule rahe ho tab ushe "ARGUMENTS"
const result = addTwoNumbers(3, 5);

console.log("Result :", result);

function loginUserMessage(username = "sam") {
  // if you want that undefined should not come then you can use default value if nothing is given then it will be taken
  // username === undefined
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("rakesh"));
// console.log(loginUserMessage()); // It will print undefined
// rest operator and spread operator // ...num1 both are same

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 555, 777, 343));

function calculateCarttPRICE(val1, val2, val3, ...num1) {
  return num1;
}

console.log(alculateCarttPRICE(200, 400, 555, 777, 343)); //see this output to clear your concepts and revision

const user = {
  username: "rakesh",
  price: 200,
};
