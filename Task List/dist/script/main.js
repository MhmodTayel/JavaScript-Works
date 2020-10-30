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
  e.preventDefault();
  if (taskInput.value === "") {
    warning.classList.add("active");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create textnode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item";
  // Add icon html
  link.innerHTML = '<i class="fas fa-times"></i>';
  // Append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  // clear input
  taskInput.value = "";
  e.preventDefault();
}

function closeWarning() {
  warning.classList.remove("active");
}
