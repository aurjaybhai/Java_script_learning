// ...Generate a Random_Number

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;
// # Method 1
const startChangingColor = function () {
  intervalID = setInterval(changeBGColor, 1000);

  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// # Method 2
// const startChangingColor = function (event) {
//   event.preventDefault();  // Prevent form submission
//   document.body.style.backgroundColor = randomColor();
// };

const stopChangingColor = function () {
  clearInterval(intervalID);
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
