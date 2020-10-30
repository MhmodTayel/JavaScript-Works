const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const warning = document.querySelector(".warning");
const close = document.querySelector(".close");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  close.addEventListener("click", closeWarning);
}

// Add Task

function addTask(e) {
  if (taskInput.value === "") {
    warning.classList.add("active");
  }

  e.preventDefault();
}

function closeWarning() {
  warning.classList.remove("active");
}
