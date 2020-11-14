const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const outputUI = document.getElementById("output");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getJSON);
btn3.addEventListener("click", getAPI);

function getText() {
  fetch("text.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      output.innerHTML = data;
    });
}

function getJSON() {
  fetch("json.JSON")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      outputUI.innerHTML = output;
    });
}

function getAPI() {
  fetch(`http://api.icndb.com/jokes/random`)
    .then((response) => response.json())
    .then((json) => outputUI.innerHTML =  json.value.joke);
}
