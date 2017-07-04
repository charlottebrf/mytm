const express = require('express');
const namer = require('./namer');
const app = express()

const port = 8000;

app.get('/:name', (req, res) => {
  var name = req.params.name;
  res.send(namer.greet(name));
});

app.listen(port, () => {
  console.log('Example app listening on port 8000');
});
