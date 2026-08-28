const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Explicitly serve static assets with exact MIME types
app.use('/css', express.static(path.join(__dirname, 'css'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));
app.use('/js', express.static(path.join(__dirname, 'js'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// General static fallback for favicon and root assets
app.use(express.static(__dirname));

// Parse incoming JSON for local lead testing
app.use(express.json());
app.post('/api/leads', (req, res) => {
  const lead = req.body;
  console.log('⚡ Kashir Lead Captured (Local API):', lead);
  res.status(200).json({ success: true, message: 'Lead captured successfully' });
});

// Root entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Only listen if not imported as a serverless handler
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Kashir POS Landing Page running at http://localhost:${PORT}`);
  });
}

module.exports = app;
