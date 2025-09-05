
//#region init functions
let appstate2 = "listView";
let activelist2 = 0;
currentData ="null";

const dummyData = {
    darkmode: false,
    lists: [
        {
            id: 1,
            name: "List 1"
            items: [
                {id: 1

                }

            ]
        }

    ]
}













function listClickCallback(action, index) {
  activelist2 = index;
  switch (action) {
    case "showList":
      listItemView();
      console.log("showList callback for index:", activelist2);
      break;
    case "editList":
      console.log("editList callback for index:", activelist2);
      break;
    case "deleteList":
      console.log("deleteList callback for index:", activelist2);
      break;
    default:
      console.error("Unknown action:", action);
      break;
  }
}
