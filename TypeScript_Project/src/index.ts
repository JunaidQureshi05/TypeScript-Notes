const btn = document.getElementById("btn")!;
const input = document.getElementById("todo")! as HTMLInputElement;
const form = document.getElementById("form");
const list = document.getElementById("todoList")!;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);
const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo = {
    text: input.value,
    completed: false,
  };
  todos.push(todo);
  createTodo(todo);
};

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}
function createTodo(todo: Todo) {
  const newTodoText = todo.text;
  const newLI = document.createElement("li");
  const checkBOX = document.createElement("input");
  checkBOX.type = "checkbox";
  checkBOX.checked = todo.completed;
  checkBOX.addEventListener("change", () => {
    todo.completed = checkBOX.checked;
    saveTodos();
  });
  newLI.appendChild(checkBOX);
  newLI.append(newTodoText);
  list.append(newLI);
  localStorage.setItem("todos", JSON.stringify(todos));
}

form?.addEventListener("submit", handleSubmit);
