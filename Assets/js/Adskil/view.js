//New button
// Få button til at virker
const newListbutton = document.getElementById("newListbutton");
const ValgInput = document.getElementById("ValgInput");
const ValgList = document.getElementById("ValgList");
const contentSection = document.getElementById("content");

// Nyt valg
newListbutton.addEventListener("click", () => {
  const taskText = ValgInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
  <span> ${taskText}</span>
  <div>
    <button class="completeBtn">right</button>
    <button class="deleteBtn">wrong</button>
  </div>
  `;

  // rigtig button
  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.querySelector("span").classList.toggle("completed");
  });

  //slet button
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  ValgList.appendChild(li);
  ValgInput.value = "";
});
