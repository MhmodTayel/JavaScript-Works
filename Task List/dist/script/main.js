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
  document.body.addEventListener("click", deleteItem);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);

  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Create textnode and append to li
    li.appendChild(document.createTextNode(task));
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
  });
}

// Add Task

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    warning.classList.add("active");
  } else {
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

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear input
    taskInput.value = "";
  }
  e.preventDefault();
}

// Store task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Do you want to delete this Task")) {
      e.target.parentElement.parentElement.remove();

      // remove task from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks() {
  if (confirm("Do you want to delete all tasks ?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
  }
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function closeWarning() {
  warning.classList.remove("active");
}
