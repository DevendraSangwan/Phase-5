const askBtn = document.getElementById('askBtn');
  const questionInput = document.getElementById('questionInput');
  const answerDiv = document.getElementById('answer');

  askBtn.addEventListener('click', async () => {
    const question = questionInput.value.trim();
    if (!question) {
      alert("Please enter a question!");
      return;
    }
    answerDiv.textContent = "Loading...";

    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: question })
      });
      const data = await response.json();
      answerDiv.textContent = data.answer || "No answer received.";
    } catch (err) {
      answerDiv.textContent = "Error: " + err.message;
    }
  });