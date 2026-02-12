// import { GoogleGenerativeAI } from "@google/generative-ai";
// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors());            
// app.use(express.json()); 
// app.use(express.static('public'));

// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash"
// });
///................main -project.................../////////

// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.post('/api/generate', async (req, res) => {
//   const { prompt } = req.body;   

//   if (!prompt) {
//     return res.status(400).json({ error: 'Prompt is required' });
//   }
//   try {
//     const result = await model.generateContent(prompt);
//     res.json({ answer: result.response.text() });
//   } catch (err) {
//     console.error('Error details:',err);
//     res.status(500).json({ error: 'AI generation failed',details:err.message || err });
//   }
// });







//.....................mini-2......................//


// app.get("/mini-2", (req, res) => {
//   res.sendFile(path.resolve("public/mini-2/mini-2.html"));
// });

// app.post("/journal-prompt", async (req, res) => {
//   const { mood } = req.body;

//   if (!mood) {
//     return res.status(400).json({ error: "Mood is required" });
//   }

//   try {
//     const prompt = `Write a short, encouraging journal prompt for someone feeling ${mood}.`;

//     const result = await model.generateContent(prompt);

//     res.json({
//       journalPrompt: result.response.text()
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to generate journal prompt" });
//   }
// });





//..................................mini-1...........................//


// app.get("/mini-1.html", (req, res) => {
//   res.sendFile(path.resolve("public/mini-1/mini-1.html"));
// });

// app.get('/fun-fact', async (req, res) => {
//   try {
//     const prompt ="Give me one unique short interesting fun facts.";
//     const result = await model.generateContent(prompt);

//     res.json({ fact: result.response.text() });
//   } catch (err) {
//     console.error('Error details:',err);
//     res.status(500).json({ error: 'AI generation failed to find fun fact'});
//   }
// });








/////////////////..................mini-3,,,,,,,,,,,,,,//

// app.get("/mini-3.html", (req, res) => {
//   res.sendFile(path.resolve("public/mini-3/mini-3.html"));
// });

// app.get('/joke', async (req, res) => {
//   try {
//     const prompt ="Give me one short interesting fun joke.";
//     const result = await model.generateContent(prompt);

//     res.json({ joke: result.response.text() });
//   } catch (err) {
//     console.error('Error details:',err);
//     res.status(500).json({ error: 'AI generation failed to find fun fact'});
//   }
// });

// app.get('/motivation', async (req, res) => {
//   try {
//     const prompt ="Give me one Motivational quote.";
//     const result = await model.generateContent(prompt);

//     res.json({ motivation: result.response.text() });
//   } catch (err) {
//     console.error('Error details:',err);
//     res.status(500).json({ error: 'AI generation failed to find fun fact'});
//   }
// });

// app.get('/tip-of-the-day', async (req, res) => {
//   try {
//     const prompt ="Give me one helpful tip of the day.";
//     const result = await model.generateContent(prompt);

//     res.json({ tip: result.response.text() });
//   } catch (err) {
//     console.error('Error details:',err);
//     res.status(500).json({ error: 'AI generation failed to find fun fact'});
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
