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

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// console.log(a); a is not defined bcoz are var and let ==> "block scoped"
// They only exist within the block where they're declared
// console.log(b); b is not defined
console.log(c); // but c is defined
// var is function-scoped (or globally scoped if not in a function
console.log(a);