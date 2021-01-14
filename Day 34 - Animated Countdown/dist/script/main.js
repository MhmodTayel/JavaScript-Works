const counter = document.getElementById("counter");
const finalMessage = document.getElementById("final");
const nums = document.getElementById("nums");
const replay = document.getElementById("replay");
const numbers = document.querySelectorAll("span");

runAnimation();

function runAnimation() {
  numbers.forEach((num, idx) => {
    const nextToLast = numbers.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}
replay.addEventListener("click", () => {
  replay.classList.add("clicked");
  setTimeout(()=> {
    location.reload();

  },500)
});
// document.getElementById('replay').addEventListener('click', () => document.getElementById('replay').classList.toggle('clicked'))
