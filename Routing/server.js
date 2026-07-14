const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.post('/home', (req, res) => {
    res.send(req.body); // Respond with the parsed JSON body
});

app.post('/home', (req, res) => {
    res.send(req.hostname); // Respond with the hostname of the request
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});