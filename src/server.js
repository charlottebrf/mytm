const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const http = require('http');

app.set('view engine', 'pug');
app.set('views', ['./views', '../views']);
app.use(express.static('./public'));
app.use(express.static('../public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/', function(req, res){
  res.status(200).send('ok');
});

const server = app.listen(8000, function() {
  const port = server.address().port;
    console.log("Wonderful server is listening on port " + port);
});

module.exports = server;
