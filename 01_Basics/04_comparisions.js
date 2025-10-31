// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // "2" is converted into number
console.log("02" > 1);

/*When you use ==, JavaScript checks for loose equality but does NOT convert null to 0.*/

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true // whenever the greater than symbol comes it convertes

/*
Loose equality in coding (especially JavaScript) means comparing two values with == (double equals), where JavaScript will convert types if needed to try to make them equal.
*/

console.log(0 == "0"); // true (string "0" is converted to number 0)
console.log(false == 0); // true (false is converted to number 0) and true is converted to 1
console.log(null == undefined); // true (special case)
// null and undefined are considered equal when using the == operator
// NOT equal when using strict equality (===) because they are different types

/*Loose equality allows type conversion, while strict equality (===) does not:*/

console.log(0 === "0"); // false (no type conversion, types must match)
