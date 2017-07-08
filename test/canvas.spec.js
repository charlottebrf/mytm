const app = require('../src/server');
Browser = require('zombie');
let assert = require('chai').assert;
describe("zombie suite", function() {

  before(function() {
    this.server = app.listen(8000);
    this.browser = new Browser({ site: 'http://localhost:8000'});
  });

  before(function(done) {
    this.browser.visit('/', function() {
      done();
    });
  });

  after(function(done) {
    this.server.close(done);
  });

  it('has a mind mapp header', function(done) {
    var browser = this.browser;
    browser.assert.text('h1', 'mind mapp');
    done();
  });


});
