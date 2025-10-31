const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const coffee = {
  name: "cold_coffee",
  price: 250,
  isAvailable: true,

  order_coffee: function () {
    console.log("coffee nhi bana (code_fatgya)");
  },
};
console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, "name")); // write to get to know the properties

// Modify your Properties
Object.defineProperty(coffee),
  "name",
  {
    writable: false,
    enumberable: false, // Hide me from loops! // suppse if you want to hide your age then turn this into false
  };
for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

