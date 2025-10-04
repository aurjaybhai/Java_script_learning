const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  //   In this we have to put callbackfun so we use
  console.log(val);
});

coding.forEach((item) => {
  // Using Arrow function same result
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe); // just giving the reference not executing it

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
