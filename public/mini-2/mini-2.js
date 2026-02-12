const btn = document.getElementById("generateBtn");
const moodSelect = document.getElementById("mood");
const output = document.getElementById("journalOutput");

btn.addEventListener("click", async () => {
  const mood = moodSelect.value;

  if (!mood) {
    output.textContent = "Please select a mood 🙂";
    return;
  }

  output.textContent = "Loading... ";

  try {
    const response = await fetch("http://localhost:3000/journal-prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mood })
    });

    const data = await response.json();
    output.innerHTML = data.journalPrompt;
  } catch (err) {
    output.textContent = "Error generating prompt";
  }
});
