const isUserloggedIn = true;
const temperature = 41;

if (temperature < 50) {
  console.log("The temperature is less than 50");
} else {
  console.log("temperature is greater than 50");
}

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`The User has ${power} in this body`);
} else {
  console.log("He is a normal Person");
}

// onsole.log(`The User has ${power} in this body`); // Don't use outside the scope it will give you error

const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test_2"); // Never type the code like this as it looks like immature ("NOT RECOMMENEDED")

// Remember this operator
// < , > , <= , >= , == , != , === , !==

if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than 750");
} else if (balance < 900) {
  console.log("Balance is less than 900");
} else {
  console.log("Balance is less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("You are welcome to Purchase the things");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User is logged in");
}
