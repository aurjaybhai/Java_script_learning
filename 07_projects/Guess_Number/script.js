const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submitt')
const userInput = document.querySelector('#guess')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true


