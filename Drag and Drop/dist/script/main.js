const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart(e) {
 e.dataTransfer.effectAllowed = "copyMove";
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
