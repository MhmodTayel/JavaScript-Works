const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const moveSelect = document.getElementById("movie");

let ticketPrice = +moveSelect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.seleceted")
    .length;

  count.innerText = selectedSeats;
  total.innerText = selectedSeats * ticketPrice;
}

moveSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("seleceted");
    updateSelectedCount();
  }
});
