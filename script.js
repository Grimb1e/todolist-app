const todos = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const addbutton = document.querySelector("button");
const todoList = document.getElementById("todo-list");

const formHandler = (e) => {
  e.preventDefault();
  todos.push({
    id: new Date().getTime().toString(),
    text: input.value,
  });
  console.log(input.value);
  input.value = "";
  renderTools();
};

const renderTools = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = todo.text;
    todoList.appendChild(todoItem);
  });
};

form.addEventListener("submit", formHandler);
