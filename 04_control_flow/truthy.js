const userEmail = [];

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have User Email");
}

// Falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Values
// "0", 'false'," ", [],{},function(){}

if (userEmail.length === 0) {
  console.log("Array is Empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null and undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? undefined; // output will be undefined
// val1 = undefined ?? null; // ouput will be "null"
val1 = null ?? 10 ?? 20; // output will be 10

console.log(val1);

// Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("greater than 80");
