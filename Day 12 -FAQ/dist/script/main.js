const buttons = document.querySelectorAll("button");
// const faq = document.querySelector('.faq')
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
