const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.put('/update', (req, res) => {
  res.send('Update request received.');
});

app.delete('/delete', (req, res) => {
  res.send('Delete request received.');
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});