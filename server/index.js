// File: server/index.js

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));

// API placeholder (you can add contact form handling here)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
