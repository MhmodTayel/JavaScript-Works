const button = document.querySelector(".get-jokes");
const jokesUL = document.querySelector(".jokes");
const loading = document.querySelector(".loading");

button.addEventListener("click", getJokes);

function getJokes(e) {
  jokesUL.innerHTML = "";
  const xhr = new XMLHttpRequest();
  const number = document.querySelector("input[type='number']").value;
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let jokes;
      const response = this.responseText;
      jokes = JSON.parse(response);

      for (let joke of jokes.value) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(joke.joke));
        jokesUL.appendChild(li);
      }
    }
  };

  xhr.send();
  jokesUL.style.display = "none";
  loading.style.display = "block";
  setTimeout(() => {
    jokesUL.style.display = "block";
    loading.style.display = "none";
  }, 500);
  e.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  loading.style.display = "none";
});
