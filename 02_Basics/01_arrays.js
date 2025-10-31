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

console.log(myArr.includes(9)); // if the 9 element is present then it returs "true/false"(false)
console.log(myArr.indexOf(19)); // checks whether 19 value is present in the array or not(-1 means it's not theree) if available tell the index position too
console.log(myArr);

const newArr = myArr.join(); // join() converts an array to a string
// By default, it uses commas as separators

console.log("My Array :", myArr);
console.log("New Array :", newArr); // removes the [] and add commas

console.log("A ", myArr);

const myn1 = myArr.slice(
  1,
  3
); /* Extracts a section of an array and returns a new array.
Does NOT modify the original array*/ // does not include 3

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); /*
Changes the contents of an array by removing or replacing elements.
// Removes 3 elements starting from index 1
DOES modify the original array.*/
console.log("C ", myArr); // Array
console.log(myn2);
