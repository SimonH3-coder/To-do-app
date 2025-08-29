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

const

saveBruger(datainformation);

// Event listener: vis data for valgt bruger
userSelect.addEventListener("change", userSelectChange);

function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log("change user to: "+ selectedUser); 
  // TODO: Hent data localStorage og vis i formularen
 const information = henteinformation();
 const data = bruger [selectedUser];
 console.log(data);
 nameInput.value = data.name;
 eddithInput.value = data.eddith;
 colorInput.value = data.color;
 deleteInput.value = data.delete;
 colorInput2.value = data.color2;
}

function saveBruger(information) {
  localStorage.setItem("information", JSON.stringify(information));
}

