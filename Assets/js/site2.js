//#region globals
const contentSection = document.getElementById("content");
let currentData = null;

//#endregion
initApp();
//#endregion
//#region model code
function getData() {
  console.log("getData");

  return JSON.parse(localStorage.getItem("toDoApp_v1"));
}

function saveData(mydData) {
  console.log("saveData");
  let seriallizedData = JSON.stringify(mydData);

  localStorage.setItem("toDoApp_v1", seriallizedData);
}
function makeNewData() {
  console.log("makeNewData");
  // dummt data husk at tømme lister inden deployment
  let newData = {
    darkMode: false,
    lists: [
      {
        listName: "list 1",
        items: [
          { name: "item1", done: false },
          { name: "item2", done: true },
          { name: "item3", done: false },
        ],
      },
      {
        listName: "indkøb",
        items: [
          { name: "Ost", done: false },
          { name: "Mælk", done: true },
          { name: "Æg", done: false },
        ],
      },
      {
        listName: "indkøb2",
        items: [
          { name: "write", done: false },
          { name: "wrong", done: true },
          { name: "right", done: false },
        ],
      },
      {
        listName: "priser",
        items: [
          { name: "100 kr", done: false },
          { name: "17 kr", done: true },
          { name: "22 kr", done: false },
        ],
      },
      {
        listName: "priser2",
        items: [
          { name: "write", done: false },
          { name: "wrong", done: true },
          { name: "right", done: false },
        ],
      },
      {
        listName: "spil",
        items: [
          { name: "Sly 2", done: false },
          { name: "Diablo 2", done: true },
          { name: "DOOM 4", done: false },
        ],
      },
      {
        listName: "spil2",
        items: [
          { name: "write", done: false },
          { name: "wrong", done: true },
          { name: "right", done: false },
        ],
      },
    ],
  };
  //   console.log(newData.lists[0].items[1]);

  return newData;
}

//#endregion model code

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

//#region view code
function makelistView(data) {
  console.log("makelistView");
  // tøm contenSection
  contentSection.innerHTML = "";

  data.lists.forEach((list, index) => {
    let listContainer = document.createElement("div");
    //vis liste
    listContainer.innerHTML = `<h2 onclick="listViewCallback("showList",${index})">${list.listName}<h2>
    <button onclick="listViewCallback("showList",${index})">delete</button>
    <button onclick="listViewCallback("showList",${index})">edit</button>
    <button onclick=listViewCallback("showList",${index})">write</button>
    <button onclick=listViewCallback("showList",${index})">tilføj</button>
    <button onclick=listViewCallback("showList",${index}">darkmode</button>
    <buttion oncclick=listViewCallback("showlList",${index}">lightmode</button)`;

    contentSection.appendChild(listContainer);
  });
}

//#endregion view code

//#region globals

//#endregion globals

//#region globals

//#endregion globals

//#region globals

//#endregion globals
