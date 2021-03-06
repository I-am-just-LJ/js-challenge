const addTasks = document.querySelector(".tasks"),
  inputTask = addTasks.querySelector("input"),
  pendingList = document.querySelector(".pendinglist"),
  finishedList = document.querySelector(".finishedlist");

const TASK_LS = "pendingTasks";
let pendingTasks = [];
let finishedTasks = [];

function saveTask() {
  localStorage.setItem(TASK_LS, JSON.stringify(pendingTasks));
}

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanTask = pendingTasks.filter(function (Tasks) {
    return Tasks.id !== parseInt(li.id);
  });
  pendingTasks = cleanTask;
  saveTask();
}

function addTask(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTask);
  const span = document.createElement("span");
  const newId = pendingTasks.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const TaskObj = {
    text: text,
    id: newId,
  };
  pendingTasks.push(TaskObj);
  saveTask();
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
    parsedTask.forEach(function (Tasks) {
      addTask(Tasks.text);
    });
  }
}

function init() {
  loadTask();
  addTasks.addEventListener("submit", handleSubmit);
}

init();
