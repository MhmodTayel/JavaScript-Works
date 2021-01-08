const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let answer = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    if (e.target.nextElementSibling === null) {
      answer = e.target.innerHTML;
    } else {
      answer = e.target.nextElementSibling.innerHTML;
    }
  }

  if (e.target.classList.contains("rating")) {
    removeActive();
    e.target.classList.add("active");
    answer = e.target.firstElementChild.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank you!</strong>
  <br>
  <strong>Feedback: ${answer}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
