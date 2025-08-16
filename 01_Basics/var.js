                        // REASONS TO AVOID "VAR" variable

// ## Weird scoping ( function scope)

function messyExample() {
  if (true) {
    var name = "rakesh";
  }
  console.log(name);
}

messyExample(); // calling the function wtf it leaked the name that's the reason we don't
// use var to declare variables

/*function cleanexample() {
  if (true) {
    let fullname = "rakesh"; // var escapes the block scope from the {} but let does not escapes from the {} that's why you get an error of undefined
  }

  console.log(fullname);
}

cleanexample(); */

// ## Hoisting Madness

/*What is "Hoisting"?
Hoisting = JavaScript secretly moves your variable declarations to the top of the function, but in a weird way!*/

console.log(age);
var age = 26;

// What JavaScript secretly does behind the scenes
/*
var age; // JavaScript moves the declaration to the top
console.log(age); // undefined (not an error!)
age = 25; // The assignment stays where it was
*/
// javascript reads the code line by line

//  ## Re-declaration Allowed (Dangerous!)

var score = 100;
var score = 200; // allowed score value changed

console.log(score); // answer is 200

// ## No constants

var PI = 3.14;
PI = 3.15; // changed

console.log(PI); // OUTPUT 3.15
