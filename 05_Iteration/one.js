// For Loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner Loop value ${j} and inner loop ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // The length output comes as "3" so we use less than bcoz in array the index start from 0 so if you "=" also then one "undefined also comes"
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Break and Continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected ${index}`);
    break;
  }
  console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected ${index}`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}
