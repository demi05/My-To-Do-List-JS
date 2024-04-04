"use strict";
const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btn");
const list = document.querySelector(".list");
//
const listEl = document.querySelectorAll(".list-el");
const enterTask = document.querySelector(".enter-task");

btnAdd.addEventListener("click", function () {
  if (!input.value) {
    enterTask.textContent = "Please enter a task";
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
