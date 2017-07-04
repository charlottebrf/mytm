const http = require('http');
process.env.NODE_ENV = 'test';
const app = require('../src/server');
const Browser = require('zombie');

describe('User visits app', function() {

  before(function() {
    this.server = http.createServer(app).listen(8080);
    this.browser = new Browser({ site: 'http://localhost:8080'});
  });

  before (function(done) {
    this.browser.visit('/DrChaz', done);
  });

  it('should see welcome page', function() {
    // this.browser.assert.success
    this.browser.assert.text('title', 'Hi, DrChaz!');
  });

  after(function(done) {
    this.server.close(done);
  });

});
