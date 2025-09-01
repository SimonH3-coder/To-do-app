const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const eddithInput = document.getElementById("eddithInput");
const colorInput = document.getElementById("colorInput");
const delecteInput = document.getElementById("deleteInput");
const colorInput2 = document.getElementById("colorInput2");
const saveButton = document.getElementById("saveButton");

const datainformation = {
  information1: { name: "Indkøb", eddith: "skriv", color: "green", delecte: "X", color2: "red" },
  information2: { name: "Priser", eddith: "skriv", color: "green", delecte: "X", color2: "red" },
  information3: { name: "Spil", eddith: "skriv", color: "green", delecte: "X", color2: "red" },
};

const dataindkøb = {
  indkøb1: { name: "Ost", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  indkøb2: { name: "Mælk", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  indkøb3: { name: "Æg", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
};

const dataindkøbsfunktioner = {
  funktioner1: { name: "Indkøb" },
  funktioner2: { line: "skriv" },
  funktioner3: { box: "noter", delecte: "X", color: "red" },
  funnktioner4: { box: "noter", right: "✓", color: "green" },
};

const datapriser = {
  priser1: { price: "100kr", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  priser2: { price: "17kr", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  priser3: { price: "22kr", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
};

const datapriserfunktioner = {
  priserfunktioner1: { name: "Priser" },
  priserfunktioner2: { line: "skriv" },
  priserfunktioner3: { box: "noter", delecte: "X", color: "red" },
  priserfunktioner4: { box: "noter", right: "✓", color: "green" },
};

const dataspil = {
  spil1: { name: "Sly2", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  spil2: { name: "Diablo2", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
  spil3: { name: "Doom4", box: "noter", color: "blue", eddith: "skriv", color2: "green" },
};

const dataspilfunktioner = {
  spilfunktioner1: { name: "Spil" },
  spilfunktioner2: { line: "skriv" },
  spilfunktioner3: { box: "noter", delecte: "X", color: "red" },
  spilfunktioner4: { box: "noter", right: "✓", color: "green" },
};

saveInformation(datainformation, dataindkøb, dataindkøbsfunktioner, datapriser, datapriserfunktioner, dataspil, dataspilfunktioner);

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

  const indkøb = henteindkøb();
  const data2 = indkøb[selectedUser];
  console.log(data2);
  nameInput.value = data2.name;
  eddithInput.value = data2.eddith;
  colorInput.value = data2.color;
  delecteInput.value = data2.delete;
  colorInput2.value = data2.color2;

  const dataindkøbsfunktioner = hentefunktioner1();
  const data3 = dataindkøbsfunktioner[selectedUser];
  console.log(data3);
  nameInput.value = data3.name;
  eddithInput.value = data3.eddith;
  colorInput.value = data3.color;
  delecteInput.value = data3.delete;
  colorInput2.value = data3.color2;

  const priser = hentepriser();
  const data4 = priser[selectedUser];
  console.log(data4);
  nameInput.value = data4.name;
  eddithInput.value = data4.eddith;
  colorInput.value = data4.color;
  delecteInput.value = data4.delete;
  colorInput2.value = data4.color2;

  const datapriserfunktioner = hentefunktioner2();
  const data5 = datapriserfunktioner[selectedUser];
  console.log(data5);
  nameInput.value = data5.name;
  eddithInput.value = data5.eddith;
  colorInput.value = data5.color;
  delecteInput.value = data5.delete;
  colorInput2.value = data5.color2;

  const spil = hentespil();
  const data6 = spil[selectedUser];
  console.log(data6);
  nameInput.value = data6.name;
  eddithInput.value = data6.eddith;
  colorInput.value = data6.color;
  delecteInput.value = data6.delete;
  colorInput2.value = data6.color2;

  const dataspilfunktioner = hentefunktioner3();
  const data7 = dataspilfunktioner[selectedUser];
  console.log(data7);
  nameInput.value = data7.name;
  eddithInput.value = data7.eddith;
  colorInput.value = data7.color;
  delecteInput.value = data7.delete;
  colorInput2.value = data7.color2;
}

function saveInformation(information, indkøb, indkøbsfunktioner, priser, priserfunktioner, spil, spilfunktioner) {
  localStorage.setItem("information", JSON.stringify(information));

  localStorage.setItem("indkøb", JSON.stringify(indkøb));
  localStorage.setItem("funktioner1", JSON.stringify(indkøbsfunktioner));

  localStorage.setItem("priser", JSON.stringify(priser));
  localStorage.setItem("priserfunktioner", JSON.stringify(priserfunktioner));

  localStorage.setItem("spil", JSON.stringify(spil));
  localStorage.setItem("spilfunktioner", JSON.stringify(spilfunktioner));
}

function henteinformation() {
  const information = localStorage.getItem("information");
  return JSON.parse(information);
}

function henteindkøb() {
  const indkøb = localStorage.getItem("indkøb");
  return JSON.parse(indkøb);
}

function hentefunktioner1() {
  const funktioner1 = localStorage.getItem("funktioner1");
  return JSON.parse(funktioner1);
}

function hentepriser() {
  const priser = localStorage.getItem("priser");
  return JSON.parse(priser);
}

function hentefunktioner2() {
  const priserfunktioner = localStorage.getItem("priserfunktioner");
  return JSON.parse(priserfunktioner);
}

function hentespil() {
  const spil = localStorage.getItem("spil");
  return JSON.parse(spil);
}

function hentefunktioner3() {
  const spilfunktioner = localStorage.getItem("spilfunktioner");
  return JSON.parse(spilfunktioner);
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

  const indkøb = henteindkøb();
  const data2 = indkøb[selectedUser];
  console.log(data2);
  data2.name = name;
  data2.eddith = eddith;
  data2.color = color;
  data2.delecte = delecte;
  data2.color2 = color2;
  saveInformation(indkøb);

  const dataindkøbsfunktioner = hentefunktioner1();
  const data3 = dataindkøbsfunktioner[selectedUser];
  console.log(data3);
  data3.name = name;
  data3.eddith = eddith;
  data3.color = color;
  data3.delecte = delecte;
  data3.color2 = color2;
  saveInformation(dataindkøbsfunktioner);

  const priser = hentepriser();
  const data4 = priser[selectedUser];
  console.log(data4);
  data4.name = name;
  data4.eddith = eddith;
  data4.color = color;
  data4.delecte = delecte;
  data4.color2 = color2;
  saveInformation(priser);

  const datapriserfunktioner = hentefunktioner2();
  const data5 = datapriserfunktioner[selectedUser];
  console.log(data5);
  data5.name = name;
  data5.eddith = eddith;
  data5.color = color;
  data5.delecte = delecte;
  data5.color2 = color2;
  saveInformation(datapriserfunktioner);

  const spil = hentespil();
  const data6 = spil[selectedUser];
  console.log(data6);
  data6.name = name;
  data6.eddith = eddith;
  data6.color = color;
  data6.delecte = delecte;
  data6.color2 = color2;
  saveInformation(spil);

  const dataspilfunktioner = hentefunktioner3();
  const data7 = dataspilfunktioner[selectedUser];
  console.log(data7);
  data7.name = name;
  data7.eddith = eddith;
  data7.color = color;
  data7.delecte = delecte;
  data7.color2 = color2;
  saveInformation(dataspilfunktioner);
});

// Vis data for første bruger ved load
window.onload = userSelectChange;
