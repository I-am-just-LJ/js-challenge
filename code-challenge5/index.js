const addTask = document.querySelector(".addTask"),
  inputTask = addTask.querySelector("input"),
  pendingList = document.querySelector(".pendingList");

const TASK_LS = "Task";
const Task = [];

function saveToTask() {
  localStorage.setItem(TASK_LS, JSON.stringify(Task));
}

function addTask(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  const newId = Date.now();
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const TaskObj = {
    text: text,
    id: newId,
  };
  Task.push(TaskObj);
  saveToTask();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputTask.value;
  addTask(currentValue);
  inputTask.value = "";
}

function loadTask() {
  const loadedTask = localStorage.getItem(TASK_LS);
  if (loadedTask !== null) {
    const parsedTask = JSON.parse(loadedTask);
    parsedTask.forEach(function(Task));
  }
}

function init() {
  loadTask();
  addTask.addEventListener("submit", handleSubmit);
}

init();
