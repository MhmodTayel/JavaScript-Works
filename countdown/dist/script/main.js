const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const audio = document.getElementById("audio");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1}   00:00:00`);
countdown.style.display = "flex !important";
function updateCountdown() {
  const currentTime = new Date();
  const test = new Date(2021, 5, 28, 13, 00, 00, 0);
  const diff = test - currentTime;

  console.log(diff, test);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  if (h < 10) {
    hours.innerHTML = `0${h}`;
  } else {
    hours.innerHTML = h;
  }
  if (m < 10) {
    minutes.innerHTML = `0${m}`;
  } else {
    minutes.innerHTML = m;
  }
  if (s < 10) {
    seconds.innerHTML = `0${s}`;
  } else {
    seconds.innerHTML = s;
  }

  if (h === 20 && m === 0) {
    document.body.innerHTML = "";
    document.body.style.backgroundImage = 'url("./css/done.jpg")';
  }
}

setInterval(updateCountdown, 1000);

// year.innerText = `${newYearTime.getFullYear()}`;
// countdown.style.display = "none !important";
year.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    countdown.style.display = "grid ";
    countdown.style.gridTemplateColumns = "repeat(4,1fr)";
    year.style.display = "block";
    loading.style.display = "none";
    audio.autoplay = true;
  }, 1000);
});
