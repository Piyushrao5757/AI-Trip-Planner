const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-trip', async (req, res) => {
  const { origin, destination, days, travelers, preferences } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'user',
            content: `Create a ${days}-day travel itinerary from ${origin} to ${destination} for ${travelers} people. Preferences: ${preferences}. Give day-wise plan, budget and places.`
          }
        ]
      })
    });

    const data = await response.json();
    res.json(data.choices[0].message.content);

  } catch (err) {
    res.status(500).send('Error generating trip');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
