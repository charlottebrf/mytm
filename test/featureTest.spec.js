var app = require('../src/server')
const Browser = require('zombie');
var http = require('http');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
describe('User visits app', function() {

  before(function() {
    this.server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('okay');
    });

    this.server.listen(8000, '127.0.0.1');
    this.browser = new Browser({ site: 'http://localhost:8000'});
  })

before(function(done) {
  this.browser.visit('/namer', done);
});

it('should be successful', function() {
  this.browser.assert.success();
});

it('should see welcome page', function() {
  this.browser.assert.text('title', 'Welcome To Mind Mapp');
});

});
