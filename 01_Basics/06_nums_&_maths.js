const score = 400;
console.log(score);

const balance = new Number(100); //new ke wajah se extra properties milta h
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision());

const hundereds = 10000000;
console.log(hundereds.toLocaleString("en-IN")); // default is USA standard you can change it to indian standard

// +++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //"abs" acts like modules in maths like converting negative number into postive
console.log(Math.round(4.7)); // round off karna
console.log(Math.ceil(4.7)); // it will always choose higher number
console.log(Math.floor(4.9)); // it will always choose lower number`
console.log(Math.min(4, 5, 3, 5, 7, 2)); // highlight the lowest number in the list of argument
console.log(Math.max(4, 5, 3, 5, 7, 2)); // highlight the highest number in the list of argument

console.log(Math.random()); // generates the random value btw 0 to 1
console.log(Math.random() * 10 + 1); // generates the random value btw 0 to 10.9999..
console.log(Math.floor(Math.random() * 10) + 1); // generates the random value btw 0 to 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

