const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.classList = "panel";
  panel.addEventListener("click", expand);
});

function expand(e) {
  let childs = e.target.parentElement.children;
  for (let i = 0; i < childs.length; i++) {
    childs[i].classList = "panel";
  }

  e.target.classList += " active";
}
