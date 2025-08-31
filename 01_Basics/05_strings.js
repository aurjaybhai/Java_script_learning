const name = "jyothi";
const repoCount = 52;

// (METHOD #1 )// console.log(name + repoCount + " Value"); // this is not recommeded as it's not proffessional

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // # Method #2

const gameName = new String("chessBaseIndia"); // object
console.log(gameName[0]); // It prints the output as "c"

console.log(gameName.__proto__); // collection of properties(like toolbox) like Uppercase

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // This checks the character position at 2
console.log(gameName.indexOf("B")); // It gets the '5'
// console.log(gameName.indexOf('b'));  // It gets the '-1'

const newString = gameName.substring(0, 4); // Method #1 **In substring you cannot put negtive values as it does not obey it
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Method #2
console.log(anotherString);

const newStringOne = " rakesh";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim() removes whitespace from both ends of a string
// Useful for cleaning up user input in forms

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

console.log(gameName.split("-"));

// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase);

// console.log(gameName.length);
