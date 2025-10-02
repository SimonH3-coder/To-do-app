import { getData, saveData } from "../Adskil/model.js";
import { makeNewData } from "../Adskil/model.js";

const contentSection = document.getElementById("content");

//#region controller code
export function initApp() {
  console.log("initApp");
  //hent data
  currentData = getData();

  // evaluer data
  if (currentData == null) {
    // vi har ikke data
    currentData = makeNewData();
    saveData(currentData);
  }
  // Vi har data
  makelistView(currentData);
}

//evaluere data

//#endregion controller code

export function listViewCallback(action, index) {
  console.log("listViewCallback", action, index);
  let data = getData();
  switch (action) {
    case "showList":
      const titles = document.querySelectorAll(".list-title");

      data.lists[index].items.forEach((item) => {
        const itemElement = document.createElement("p");
        itemElement.textContent = item.name;
        titles[index].appendChild(itemElement);
        function addTaskToList(listIndex, taskName) {
          if (!taskName || taskName.trim() === "") return;
          let data = getData();
          data.lists[listIndex].items.push({ name: taskName.trim(), done: false });
          saveData(data);
          makelistView(data);
        }
      });

      alert("showList " + index);
      break;
    case "delete":
      data.lists.splice(index, 1);
      saveData(data);
      alert("delete " + index);
      break;
    case "edit":
      data.lists[index].listName = prompt("Ny liste navn", data.lists[index].listName);
      saveData(data);
      alert("edit " + index);
      break;
    case "tilføj":
      const newtask = prompt("Hvad skal opgaven hedde?");
      if (newtask) {
        data.lists[index].items.push({ name: newtask, done: false });
      }
      saveData(data);
      alert("tilføj " + index);
      console.log(data);
      break;
    default:
      alert("ukendt action " + action);
      break;
  }
}

//#region view code
export function makelistView(data) {
  console.log("makelistView");
  // tøm contenSection
  contentSection.innerHTML = "";

  data.lists.forEach((list, index) => {
    let listContainer = document.createElement("div");

    // Titel
    const title = document.createElement("h2");
    title.classList.add("list-title");
    title.textContent = list.listName;
    title.style.cursor = "pointer";
    title.addEventListener("click", () => listViewCallback("showList", index));
    listContainer.appendChild(title);

    // Delete knap
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", () => listViewCallback("delete", index));
    listContainer.appendChild(deleteBtn);

    // Edit knap
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", () => listViewCallback("edit", index));
    listContainer.appendChild(editBtn);

    // Tilføj knap
    const addBtn = document.createElement("button");
    addBtn.textContent = "tilføj";
    addBtn.addEventListener("click", () => listViewCallback("tilføj", index));
    listContainer.appendChild(addBtn);

    list.items.forEach((item) => {
      const itemElement = document.createElement("p");
      itemElement.textContent = item.name;
      listContainer.appendChild(itemElement);
    });

    // Darkmode knap

    contentSection.appendChild(listContainer);
  });
}

// Knap for edit og delete
const todoworkList = document.getElementById("todoworkList");
const todoworkInput = document.getElementById("todoworkInput");

export function addworkTodo() {
  const text = todoworkInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  // Edit knap
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit todo", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  // Delete knap
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoworkList.appendChild(li);
}
todoworkInput.value = "";

//Tilfoej button
const input = document.getElementById(`todotiloejInput`);
const addBtn = document.getElementById(`add btn`);
const list = document.getElementById(`todotilfoejList`);

export function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement(`li`);

  const toggle = document.createElement(`input`);
  toggle.type = `checkbox`;
  toggle.addEventListener(`change`, () => {
    li.classList.toggle(`done`, toggle.checked);
  });

  const span = document.createElement(`span`);
  span.textContent = text;

  const del = document.createElement(`button`);
  del.textContent = `Slet`;
  del.addEventListener(`click`, () => li.remove());

  li.append(toggle, span, del);
  list.appendChild(li);

  input.value = ``;
  input.focus();
}

// klik knap
addBtn.addEventListener(`click`, addTodo);
//Tryk input
input.addEventListener(`keydown`, (e) => {
  if (e.key === `Enter`) addTodo();
});

//Darkmode og lightmode knap
const btn = document.getElementById(`mode-btn`);
const body = document.body;

//Hvis en tidligere bruger har valgt, så husk det
if (localStorage.getItem(`theme`) === `dark`) {
  body.classList.add(`dark`);
  btn.textContent = "Light Mode";
  btn.classList.add("light-btn");
}

btn.addEventListener(`click`, () => {
  body.classList.toggle(`dark`);

  if (body.classList.contains(`dark`)) {
    btn.textContent = "Light Mode";
    btn.classList.add("Light-btn");
    localStorage.setItem(`theme`, `dark`);
  } else {
    btn.textContent = "Dark Mode ";
    btn.classList.remove("light-btn");
    localStorage.setItem(`theme`, `light`);
  }
});
