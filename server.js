const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define routes for game management (Admin/Agent functionalities)
app.post('/game/start', (req, res) => {
  // Implement game start logic here
  res.json({ success: true });
});

app.post('/game/extend', (req, res) => {
  // Implement game time extension logic here
  res.json({ success: true });
});

app.post('/game/callNumber', (req, res) => {
  // Implement number calling logic here
  res.json({ success: true });
});

app.post('/game/award/create', (req, res) => {
  // Implement award creation logic here
  res.json({ success: true });
});

app.post('/game/award/delete', (req, res) => {
  // Implement award deletion logic here
  res.json({ success: true });
});

// Admin and Agent login routes
app.post('/login/agent', (req, res) => {
  // Implement agent login logic here
  res.json({ success: true });
});

app.post('/login/admin', (req, res) => {
  // Implement admin login logic here
  res.json({ success: true });
});

// Catch-all route to handle 404 errors
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
