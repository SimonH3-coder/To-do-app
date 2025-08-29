const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const eddithInput = document.getElementById("eddithInput");
const colorInput = document.getElementById("colorInput");
const deleteInput = document.getElementById("deleteInput");
const colorInput2 = document.getElementById("colorInpu2");
const saveButton = document.getElementById("saveButton");

const datainformation = {
  information1: { name: "Indkøb", eddith: "skriv", color: "green", delete: "X", color2: "red" },
  information2: { name: "Priser", eddith: "skrive", color: "green", delecte: "X", color2: "red" },
  information3: { name: "Spil", eddith: "skrive", color: "green", delecte: "X", color2: "red" },
};

saveBruger(datainformation);

// Event listener: vis data for valgt bruger
userSelect.addEventListener("change", userSelectChange);
