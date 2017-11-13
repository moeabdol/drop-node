const express = require('express');
const multer  = require('multer');
const path    = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.post('/api/uploads', (req, res) => {
  const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);

      if (ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
        return cb('Not an image!', false);
      }
      cb(null, true);
    }
  }).array('image', 10);

  upload(req, res, err => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ message: 'file uploaded successfully!' });
  });
});

app.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Connected to server at port', 3000);
});
