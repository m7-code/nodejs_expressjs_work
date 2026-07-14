const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Contact = require('./models/contacts.models.js');

// connect to MongoDB
mongoose.connect('mongodb+srv://mughiraasad6_db_user:mughira321@cluster0.kkn8rvi.mongodb.net/test?appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//routes

app.get('/',async (req, res) => {
  const contacts = await Contact.find();
  res.render('home.ejs',{contacts})})

app.get('/show-contacts/:id', async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render('show-contacts.ejs', { contact });
});

app.get('/add-contact', (req, res) => {res.render('add-contact.ejs')})

app.post('/add-contact', (req, res) => {})

app.get('/update-contact', (req, res) => {res.render('update-contact.ejs')})

app.post('/update-contact', (req, res) => {})

app.post('/delete-contact', (req, res) => {})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

