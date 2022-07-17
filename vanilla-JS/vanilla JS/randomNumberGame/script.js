const inputSubmit = document.querySelector("#submit");
const guessStart = document.querySelector("#guess");
const numRange = document.querySelector("#numberInput");
const inputIntro = document.querySelector("#inputInstruction");
const result = document.querySelector("#result");
const submitBtn = document.getElementById("submit");
const userInput = document.querySelector("#playerInput");

function userSubmit(event) {
  event.preventDefault();
  const userGuess = parseInt(userInput.value);
  const range = parseInt(numRange.value);
  const num = Math.floor(Math.random() * range + 1);
  if (range >= 0) {
    inputIntro.innerText = `You chose: ${userGuess},the machine chose: ${num}.`;
    if (num === userGuess) {
      result.innerText = "You Won!";
    } else {
      result.innerText = "You Lost!";
    }
  }
}

guessStart.addEventListener("submit", userSubmit);
