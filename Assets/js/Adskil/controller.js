//#region controller code
function initApp() {
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

function listViewCallback(action, index) {
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
