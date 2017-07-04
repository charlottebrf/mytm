const Browser = require('zombie');
var http = require('http');

describe('User visits app', function() {

  before(function() {
    this.server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('okay');
    });

    this.server.listen(8080, '127.0.0.1');
    this.browser = new Browser({ site: 'http://localhost:8080'});
  })

before(function(done) {
  this.browser.visit('/', done);
});

it('should be successful', function() {
  this.browser.assert.success();
});

it('should see welcome page', function() {
  this.browser.assert.text('title', 'Welcome to Mind Mapp');
});

});
