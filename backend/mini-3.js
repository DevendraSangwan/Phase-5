// mini-3.js
const express = require('express');   
const cors = require('cors');         
const path = require('path');         
const { getModel } = require('./genAI.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const model = getModel();

// Mini-3 routes
app.get("/mini-3.html", (req, res) => {
  res.sendFile(path.resolve("public/mini-3/mini-3.html"));
});

app.get('/joke', async (req, res) => {
  try {
    const result = await model.generateContent("Give me one short interesting fun joke.");
    res.json({ joke: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

app.get('/motivation', async (req, res) => {
  try {
    const result = await model.generateContent("Give me one Motivational quote.");
    res.json({ motivation: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

app.get('/tip-of-the-day', async (req, res) => {
  try {
    const result = await model.generateContent("Give me one helpful tip of the day.");
    res.json({ tip: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

const PORT = 3003;        // Mini-3 project port
app.listen(PORT, () => console.log(`Mini-3 running on port ${PORT}`));
