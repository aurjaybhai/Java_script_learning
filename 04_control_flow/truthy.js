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
