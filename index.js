const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');
const logger = require('morgan');
const upload = multer({
    dest: 'uploads/'
});
app.use(logger());

app.get('/', function (req, res) {
    res.send({
        msg: '利厚'
    });
});

app.get('/file', function (req, res, next) {
    var form = fs.readFileSync('./public/index.html', { encoding: 'utf8' });
    res.send(form);
})

app.post('/file', upload.single('file'), function (req, res, next) {
  res.send({size: req.file.size});
})


app.listen(3000, function () {
    console.log("3000超優");
})