const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getJSON);

function getText() {
  fetch("text.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
    });
}

function getJSON() {
  fetch("json.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.title);
      console.log(data.body);
    });
}
