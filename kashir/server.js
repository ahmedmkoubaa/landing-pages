const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from this directory
app.use(express.static(__dirname));

// Parse incoming JSON for local lead testing
app.use(express.json());
app.post('/api/leads', (req, res) => {
  const lead = req.body;
  console.log('⚡ Kashir Lead Captured (Local API):', lead);
  res.status(200).json({ success: true, message: 'Lead captured successfully' });
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Kashir POS Landing Page running at http://localhost:${PORT}`);
});
