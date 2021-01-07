const range = document.getElementById("range");
const label = document.getElementById("label");

range.addEventListener("input", () => {
  label.innerText = range.value;
  label.style.left = `${scale(range.value, 0, 100, -18, 259)}px`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

