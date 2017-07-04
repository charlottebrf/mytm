const express = require('express');
const namer = require('./namer');
const app = express();
const path = require('path');

const port = 8000;

app.get('/:name', (req, res) => {
  var name = req.params.name;
  res.send(namer.greet(name));
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log('Example app listening on port 8000');
});
