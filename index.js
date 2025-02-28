const express = require('express');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generatePrompt = (schema) => {
  return `Generate a JSON object strictly following this schema: ${JSON.stringify(
    schema,
    null,
    2
  )}.`;
};

app.post('/generate?extraPrompts', async (req, res) => {
  try {
    const { schema } = req.body;
    if (!schema) return res.status(400).json({ error: 'Schema is required' });

    const prompt = generatePrompt(schema);

    const response = await openai.chat.completions.create({
      model: 'o1-preview',
      messages: [{ role: 'system', content: prompt }],
      temperature: 0.7,
      response_format: 'json-object',
    });

    const generatedData = response.choices[0].message?.content;

    res.json({ data: JSON.parse(generatedData) });
  } catch (error) {
    console.error('Error generating data:', error);
    res.status(500).json({ error: 'Failed to generate data' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
