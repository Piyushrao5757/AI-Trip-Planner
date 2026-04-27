# 🚀 COMPLETE AI TRIP PLANNER (READY PROJECT STRUCTURE)

## 📁 Folder Structure

```
ai-trip-planner/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

# 🧠 BACKEND (backend/server.js)

```js
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
```

---

# 📦 backend/package.json

```json
{
  "name": "trip-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```

---

# 🔑 backend/.env

```
OPENAI_API_KEY=your_api_key_here
```

---

# 🌐 FRONTEND (frontend/index.html)

```html
<!DOCTYPE html>
<html>
<head>
  <title>AI Trip Planner</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>✈️ AI Trip Planner</h1>

<div class="form">
  <input id="origin" placeholder="From" />
  <input id="destination" placeholder="To" />
  <input id="days" type="number" placeholder="Days" />
  <input id="travelers" type="number" placeholder="Travelers" />
  <input id="preferences" placeholder="Adventure, Food" />

  <button onclick="planTrip()">Generate Trip</button>
</div>

<div id="output"></div>

<script src="script.js"></script>
</body>
</html>
```

---

# 🎨 frontend/style.css

```css
body {
  font-family: Arial;
  text-align: center;
  background: #f5f5f5;
}

.form input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
}

button {
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
}

#output {
  margin-top: 20px;
  padding: 20px;
  background: white;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  white-space: pre-wrap;
}
```

---

# ⚡ frontend/script.js

```js
async function planTrip() {
  const data = {
    origin: document.getElementById('origin').value,
    destination: document.getElementById('destination').value,
    days: document.getElementById('days').value,
    travelers: document.getElementById('travelers').value,
    preferences: document.getElementById('preferences').value
  };

  document.getElementById('output').innerText = 'Generating plan...';

  const res = await fetch('http://localhost:5000/generate-trip', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.text();
  document.getElementById('output').innerText = result;
}
```

---

# ▶️ HOW TO RUN

### 1. Backend
```
cd backend
npm install express cors dotenv
node server.js
```

### 2. Frontend
- Open `index.html`

---

# 🚀 DEPLOY

### Backend → Render
### Frontend → Netlify

---

# 💥 FINAL RESULT

✔ AI itinerary generator
✔ Full stack project
✔ Ready for GitHub + Netlify
✔ Resume ready 🔥

---

Agar next chahiye:
👉 UI upgrade (cards + modern look)
👉 React version
👉 Database + login system
