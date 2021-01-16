const codes = document.querySelectorAll(".code");
const container = document.querySelector(".container");
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key !== "." || e.key !== "+" || e.key !== "-") {
      codes[idx].value = "";
    }
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(
        () => (codes[idx + 1] ? codes[idx + 1].focus() : codes[idx].blur()),
        10
      );
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }

    if (idx > 5) {
      codes[idx + 1].blur();
    }
  });
});
