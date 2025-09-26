const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submitt");
const userInput = document.querySelector("#guess");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworHi = document.querySelector(".loworHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a number more than 1");
  } else if (guess > 500) {
    alert("Please Enter a number less than 100");
  } else {
    if (numGuess === 11) {
      displayGuess(guess);
      displayGuess(`Game Over and the random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
}

function displayGuess(guess) {
  //
}

function displayMessage(message) {
  //
}

function newGame() {
  //
}

function endGame() {
  //
}
