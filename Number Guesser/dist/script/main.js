let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} .`, "red");
  }

  if (guess === winningNum) {
    guessInput.disabled = true;
    setMessage(`${winningNum} is CORRECT!`, "rgba(15, 207, 15, 1)");
  } else {
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
