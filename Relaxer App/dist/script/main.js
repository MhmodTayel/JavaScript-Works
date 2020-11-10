const container = document.getElementById("container");
const text = document.getElementById("text");
const gradientCircle = document.querySelector(".gradient-circle");

const totalTime = 7500;

const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  gradientCircle.className = "gradient-circle breatheIn";
  setTimeout(() => {
    text.innerText = "Hold!";
    gradientCircle.className = "gradient-circle hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
      gradientCircle.className = "gradient-circle breatheOut";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
