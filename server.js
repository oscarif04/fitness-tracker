const express = require('express');
const log = require('morgan');
const mongo = require('mongoose');

const PORT = 3000;

const app = express();

app.use(log('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongo.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});