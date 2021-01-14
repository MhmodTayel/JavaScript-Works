const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(input.value);
});

function addTodo(todo) {
  if (todo) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todo;

    todosUl.appendChild(todoEl);

    todoEl.addEventListener("click", () =>
      todoEl.classList.toggle("completed")
    );

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.classList.add("deleted");
      setTimeout(() => {
        todoEl.remove()
      }, 500);
    });

    input.value = "";
  }
}
