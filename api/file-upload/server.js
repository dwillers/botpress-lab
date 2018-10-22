const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/form', express.static(__dirname + '/index.html'));

// default options
app.use(fileUpload());

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.post('/upload', function (req, res) {
  let uploadPath;


  if (Object.keys(req.files).length == 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line
    file = req.files.file;
    uploadPath = __dirname + '/uploads/' + file.name;
    file.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.send('File uploaded to ' + uploadPath);
    });
});

app.listen(8099, function () {
  console.log('Express server listening on port 8099');
});