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
          { name: "item1 indkøb", done: false },
          { name: "item2 priser", done: true },
          { name: "item3 spil", done: false },
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

//New button
// Få button til at virker
const newListbutton = document.getElementById("newListbutton");
const ValgInput = document.getElementById("ValgInput");
const ValgList = document.getElementById("ValgList");
