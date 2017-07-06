const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');
const http = require('http');
const port = 8000;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('./public'));

app.get('/', function(req, res){
  res.render('index')
});

module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(port, function() {
    console.log("Server listening on port" + port);
  });
}
