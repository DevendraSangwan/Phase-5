const outputDiv = document.getElementById("output");
const btn=document.querySelectorAll(".button");
function setButtonsDisabled(state) {
  buttons.forEach(btn => btn.disabled = state);
}

// Joke button
document.getElementById("jokeBtn").addEventListener("click", async () => {
    btn.disabled=true;
    outputDiv.textContent = "Loading...";

  try {
    const response = await fetch("http://localhost:3003/joke");
    const data = await response.json();
    outputDiv.innerHTML = data.joke;
  } catch (err) {
    outputDiv.textContent = "Error: " + err.message;
  }
  btn.disabled=false;
});

// Motivation button
document.getElementById("motivationBtn").addEventListener("click", async () => {
  outputDiv.textContent = "Loading...";
  btn.disabled=true;

  try {
    const response = await fetch("http://localhost:3003/motivation");
    const data = await response.json();
    outputDiv.innerHTML = data.motivation;
  } catch (err) {
    outputDiv.textContent = "Error: " + err.message;
  }
  btn.disabled=false;
});

// Tip of the day button
document.getElementById("tipBtn").addEventListener("click", async () => {
  outputDiv.textContent = "Loading...";
btn.disabled=true;
  try {
    const response = await fetch("http://localhost:3003/tip-of-the-day");
    const data = await response.json();
    outputDiv.innerHTML = data.tip;
  } catch (err) {
    outputDiv.textContent = "Error: " + err.message;
  }
  btn.disabled=false;
});
