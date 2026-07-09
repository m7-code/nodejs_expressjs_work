const express = require('express');
const app = express();
const port = 3000;



app.set('view engine', 'ejs');

app.get('/user', (req, res) => {
  res.render('user');            // ---> This will render the user.ejs template when the /user route is accessed
});

app.get('/', (req, res) => {
  res.send({
    name: 'Express Server',
    author: 'Your Name',
    message: 'Hello, World!'
  });
});

app.get('/json', (req, res) => {
  res.json({
    name: 'About Us',
    description: 'This is the about page.'
  });
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/user1',(req, res) => {
  res.redirect('/about');         //------> This will redirect the user to the /about route when they access /user1
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});