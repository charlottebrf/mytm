const http = require('http');
process.env.NODE_ENV = 'test';
const app = require('../src/server');
const Browser = require('zombie');

describe('User sees blank canvas', function() {

  before(function() {
    this.server = http.createServer(app).listen(8080);
    this.browser = new Browser({ site: 'http://localhost:8080'});
  });

  before (function(done) {
    this.browser.visit('/index', done);
  });

  it('should have a blank canvas', function() {
    this.browser.assert.element('#canvas');
  });

  it('should show an addded object', function() {
    this.browser.assert.element('#test-object')
  });


  after(function(done) {
    this.server.close(done);
  });

});
