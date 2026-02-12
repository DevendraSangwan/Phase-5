// mini-1.js
const express = require('express');   
const cors = require('cors');         
const path = require('path');         
const { getModel } = require('./genAI.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const model = getModel();

// Mini-1 routes
app.get("/mini-1.html", (req, res) => {
  res.sendFile(path.resolve("public/mini-1/mini-1.html"));
});

app.get('/fun-fact', async (req, res) => {
  try {
    const prompt = "Give me one unique short interesting fun fact.";
    const result = await model.generateContent(prompt);
    res.json({ fact: result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

const PORT = 3001;  //mini-1 project port
app.listen(PORT, () => console.log(`Mini-1 running on port ${PORT}`));
