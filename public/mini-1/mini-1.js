const funBtn = document.getElementById('funBtn');
const outputDiv = document.getElementById('funOutput');

funBtn.addEventListener('click', async () => {
  outputDiv.textContent = "Loading...";

  try {
    const response = await fetch("http://localhost:3000/fun-fact");
    const data = await response.json();
    outputDiv.innerHTML = data.fact;
  } catch (err) {
    outputDiv.textContent = "Error: " + err.message;
  }
});
