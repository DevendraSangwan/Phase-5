const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function getModel() {
  return genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
}

module.exports = { getModel };
