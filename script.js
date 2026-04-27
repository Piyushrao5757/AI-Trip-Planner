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
