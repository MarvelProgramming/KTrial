const express = require('express');
const cors = require('cors');
const path = require('path');
const routing = require('./routing');
const db = require('./db/index');

db.on('error', console.error.bind(console, 'Database error event raised:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/quiz', routing.quizRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
