const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", getText);

function getText() {
  fetch("text.txt").then((res) => {
    console.log(res);
  });
}
