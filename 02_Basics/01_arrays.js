// Array

const myArr = [0, 1, 2, 3, 4, 5, 6]; // # Method 1
const Heros = [
  "Avengers",
  "Iron Man",
  "Captain America",
  "Spider-Man",
  "Black Panther",
];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7); // # Method 2
console.log(myArr2[1]);

// Array Methods

// myArr.push(7); // modify to adds a value in the arrays
// myArr.push(8);
// myArr.pop()  // just remove the last value in the Array
// console.log(myArr);

// myArr.unshift(9); //adds the 9 value at the starting of an Array
// myArr.shift(); // shift removes the 1st element from the array
console.log("After shift:", myArr);

console.log(myArr.includes(9)); // if the 9 element is present then it returs "true/false"
console.log(myArr.indexOf(19)); // checks whether 19 value is present in the array or not
console.log(myArr);

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);  // Array
console.log(myn2);
