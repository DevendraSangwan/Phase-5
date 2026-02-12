// mini-2.js
const express = require('express');   
const cors = require('cors');         
const path = require('path');         
const { getModel } = require('./genAI.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const model = getModel();

// Mini-2 routes
app.get("/mini-2", (req, res) => {
  res.sendFile(path.resolve("public/mini-2/mini-2.html"));
});

app.post("/journal-prompt", async (req, res) => {
  const { mood } = req.body;
  if (!mood) return res.status(400).json({ error: "Mood is required" });

  try {
    const prompt = `Write a short, encouraging journal prompt for someone feeling ${mood}.`;
    const result = await model.generateContent(prompt);
    res.json({ journalPrompt: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate journal prompt" });
  }
});

const PORT = 3002;     //MIni-2 project port
app.listen(PORT, () => console.log(`Mini-2 running on port ${PORT}`));
