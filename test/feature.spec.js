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

  //text input rather than text area
  it('has a text area', function(done) {
    var browser = this.browser;
    browser.assert.element('textarea');
    done();
  });

  it('has a canvas', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas');
    done();
  });

  it('has a rectangle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Rectangle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a circle button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Circle').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  //test background colour toggles tests are currently skipped- these need to be fixed to work
  xit('has a Hawaiian yellow background toggle that can be clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('colorbuttonhawaiianyellow');
    done();
  });

  xit('has a salmon background toggle clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('colorbuttonsalmon');
    done();
  });

  xit('has a very yellow background toggle that can be clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('colorbuttonveryyellow');
    done();
  });




});
