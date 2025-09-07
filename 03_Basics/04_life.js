// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// this is called Iffy function in which we use to reduce the pollution of the global scope
// If you want to execute the function Immediately after the defining then see above
// chai(); // you cannot access the chai outside (global scope)
//*********************** Trying to write the function in the arrow fxn format **************************
// (() => {
//   console.log(`DB CONNECTED TWO`);
// })();

(() => {
  console.log(`DB CONNECTED TWO`);
})();
// yaa par semicolumn nahi lagya toh error aayaga(TypeError: (intermediate value)(...) is not a function)

((name) => {
  // Unamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("rakesh");

