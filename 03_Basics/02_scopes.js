var c = 300; // this is global scope
let a = 300;
{
  if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner : ", a);
  }
} // this is block scope

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a); a is not defined bcoz are var and let ==> "block scoped"
// They only exist within the block where they're declared
// console.log(b); b is not defined
console.log(c); // but c is defined
// var is function-scoped (or globally scoped if not in a function
console.log(a);

function one() {
  const username = "rakesh";

  function two() {
    const website = "youtube";
    console.log(username); // you can understand chota baccha badhe se ice-cream le sakta h but badha agar leta h toh accha nahi lagega
  }
  // console.log(website); website is not defined as website scope is already done
  two();
}

one();

if (true) {
  const username = "rakesh";
  if (username === "rakesh") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

addone(5); // this will not give error though it is declared before
function addone(num) {
  return num + 1;
}

// addTwo(5); // this will give an error bcoz here we have declared and holded in the variable so you cannot use the function before declaration
const addTwo = function (num) {
  return num + 2;
}; // kabhi kabra isko ham experession be boldehte h isko function ilava

