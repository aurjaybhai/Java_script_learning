const marvel_heros = ["thor", "Iron Man", "SpiderMan"];
const Detective_Comics = ["superman", "flash", "batman"];

marvel_heros.push(Detective_Comics);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // if you want to access the array in array so you use [1]

const allHeros = marvel_heros.concat(Detective_Comics); // # Method 1 to merge the two arrays into single so that it should not look like [array in array]
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...Detective_Comics]; //  # Method 2 (simple) it's like glass is splitted on the floor
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // you need to choose depth of arrays here i have used an hack by using "Infinity"
console.log(real_another_array);

console.log(Array.isArray("rakesh")); // checks whether it's an ARRAY or not and returns the output Boolean
console.log(Array.from("rakesh")); // converts this into an ARRAY
console.log(Array.from({ name: "rakesh" })); //(INTERESTING CASE) trys to convert the object to an ARRAY but we need to specify (keys: value)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("Last output :", Array.of(score1, score2, score3)); //  JavaScript creates a new array from the provided arguments.
