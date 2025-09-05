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
