const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", hoverLeft);
right.addEventListener("mouseenter", hoverRight);

function hoverLeft() {
  container.classList.remove("hover-right");
  container.classList.add("hover-left");
}

function hoverRight() {
  container.classList.remove("hover-left");
  container.classList.add("hover-right");
}
