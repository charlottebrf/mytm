var app = require('../src/server')
const Browser = require('zombie');
var http = require('http');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
describe('User visits app', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000'});
  })

before(function(done) {
  browser.visit('/namer', done);
});

it('should be successful', function() {
  browser.assert.success();
});

it('should see welcome page', function() {
  browser.assert.text('title', 'Welcome To Mind Mapp');
});

});
