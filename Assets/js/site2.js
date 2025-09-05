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
  // dummt data hsk at tømme lister inden deployment
  let newData = {
    darkMode: false,
    lists: [
      {
        listName: "list 1",
        items: [
          { name: "item 1", done: false },
          { name: "item2", done: true },
          { name: "item3", done: false },
        ],
      },
      {
        listName: "indkøb",
        items: [
          { name: "kød", done: false },
          { name: "salat", done: true },
          { name: "sovs", done: false },
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
  // Vis data til bruger
  data.lists.forEach((list) => {
    console.log(list.listName);
  });
}

//#endregion view code

//#region globals

//#endregion globals

//#region globals

//#endregion globals

//#region globals

//#endregion globals
