const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
// on Object forfo loop does not work it works on Maps

for (const key in myObject) {
  // # Method 1
  console.log(myObject[key]);
}

for (const key in myObject) {
  // # Method 2
  console.log(`${myObject[key]} shortcut is ${key}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key); // You will get the ouput as numbers like "0,1,2,3,4,5,6"
} // for printing the values we use below method

for (const key in programming) {
  console.log(programming[key]);
}

/*const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key); // This will not give any output as map cannot iterate so we cannot use this
}*/
