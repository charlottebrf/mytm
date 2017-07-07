const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const http = require('http');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('./public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/', function(req, res){
  res.status(200).send('ok');
});

const server = app.listen(8000, function() {
  const port = server.address().port;
  console.log("Wonderful server is listening at" + port);
});

module.exports = server;
