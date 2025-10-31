const id = Symbol("123"); // Imagine two people with the same name "John Smith". Even though they have the same name, they have different Social Security Numbers.
const anotherId = Symbol("123");

console.log(id === anotherId);