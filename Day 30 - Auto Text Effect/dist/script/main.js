const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "mhmodTayel is a Developer";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if ((idx > text.length)) {
    idx = 1;
  }
  setTimeout(writeText, speed)
}


speedEl.addEventListener('input', () => {
  speed = 300 / speedEl.value;
})