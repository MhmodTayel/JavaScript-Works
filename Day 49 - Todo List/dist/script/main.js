const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {addTodo(todo)
  
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(input.value);
});

function addTodo(todo) {
  
  if (todo) {
    let todoText = input.value

    if(todo) {
      todoText =todo.text
    }

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    const todoEl = document.createElement("li");


    todoEl.innerText = todo.text;

    todosUl.appendChild(todoEl);

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.classList.add("deleted");
      setTimeout(() => {
        todoEl.remove();
        updateLS();
      }, 500);
    });

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
