const express = require('express');
const multer  = require('multer');
const path    = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const upload = multer({ dest: 'uploads/' }).single('img');

app.post('/api/uploads', (req, res, next) => {
  upload(req, res, err => {
    if (err) return next(err);
    res.status(200).json({ message: 'file uploaded successfully!' });
  });
});

app.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Connected to server at port', 3000);
});
