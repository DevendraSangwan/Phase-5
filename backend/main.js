const express = require('express');   
const cors = require('cors');         
const path = require('path');         
const { getModel } = require('./genAI.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const model = getModel();

// Main project route
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt required" });

  try {
    const result = await model.generateContent(prompt);
    res.json({ answer: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI generation failed" });
  }
});

const PORT = 3000; // main project port
app.listen(PORT, () => console.log(`Main project running on port ${PORT}`));
