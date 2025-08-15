const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

console.log("BEFORE:", obj1); // { '1': 'a', '2': 'b' }

const obj3 = Object.assign(obj1, obj2); // No {}

console.log("AFTER obj1:", obj1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
console.log("obj3:", obj3);        // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// with {} original object stays safe