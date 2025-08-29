const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const eddithInput = document.getElementById("eddithInput");
const colorInput = document.getElementById("colorInput");
const delecteInput = document.getElementById("deleteInput");
const colorInput2 = document.getElementById("colorInput2");
const saveButton = document.getElementById("saveButton");

const datainformation = {
  information1: { name: "Indkøb", eddith: "skriv", color: "green", delecte: "X", color2: "red" },
  information2: { name: "Priser", eddith: "skrive", color: "green", delecte: "X", color2: "red" },
  information3: { name: "Spil", eddith: "skrive", color: "green", delecte: "X", color2: "red" },
};

saveInformation(datainformation);

// Event listener: vis data for valgt bruger
userSelect.addEventListener("change", userSelectChange);

function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log("change user to: " + selectedUser);
  // TODO: Hent data localStorage og vis i formularen
  const information = henteinformation();
  const data = information[selectedUser];
  console.log(data);
  nameInput.value = data.name;
  eddithInput.value = data.eddith;
  colorInput.value = data.color;
  delecteInput.value = data.delete;
  colorInput2.value = data.color2;
}

function saveInformation(information) {
  localStorage.setItem("information", JSON.stringify(information));
}

function henteinformation() {
  const information = localStorage.getItem("information");
  return JSON.parse(information);
}

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
  console.log("save data");

  const selectedUser = userSelect.value;
  const name = nameInput.value;
  const eddith = eddithInput.value;
  const color = colorInput.value;
  const delecte = delecteInput.value;
  const color2 = colorInput2.value;
  document.body.style.backgroundColor = color2;

  // TODO: Gem data i localStorage for den valgte bruger
  const information = henteinformation();
  const data = information[selectedUser];
  console.log(data);
  data.name = name;
  data.eddith = eddith;
  data.color = color;
  data.delecte = delecte;
  data.color2 = color2;
  saveInformation(information);
});

// Vis data for første bruger ved load
window.onload = userSelectChange;
