const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    button.innerHTML = `Click Me <span class="circle" style="top: ${yInside}px; left: ${xInside}px;"></span>`;
  });
});
