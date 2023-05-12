let todos = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const addbutton = document.querySelector("button");
const todoList = document.getElementById("todo-list");

const formHandler = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    todos.unshift({
      id: new Date().getTime().toString(),
      text: input.value,
    });
  input.value = "";
  renderTools();
  };
};

const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
  renderTools();
}

const renderTools = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todo.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  });
};


form.addEventListener("submit", formHandler);
