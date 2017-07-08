const app = require('../src/server');
Browser = require('zombie');
let assert = require('chai').assert;
describe('Feature tests', function() {

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

  it('has a popup', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas', 'popup');
    done();
  });

  it('has a popup title on how to use the page', function(done) {
    var browser = this.browser;
    browser.assert.element('h4','How to use' );
    done();
  });

  it('has more instructions in the popup on how to use the page', function(done) {
    var browser = this.browser;
    browser.assert.element('ul','Create an idea by typing a word into the text box and then clicking a shape.' );
    done();
  });

  it('has a text area', function(done) {
    var browser = this.browser;
    browser.assert.element('input');
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

  it('has a reset button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Reset').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a clear lines button that can be clicked on', function(done) {
    var browser = this.browser;
    browser.pressButton('Clear Lines').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a Hawaiian yellow background toggle that can be clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas','hawaiianyellow')
    done();
  });

  it('has a salmon background toggle that can be clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas','salmon');
    done();
  });

  it('has a very yellow background toggle that can be clicked', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas', 'veryyellow');
    done();
  });

  it('has a toolbar', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas', 'toolbar');
    done();
  });

  it('has a button that can be clicked to hide or reveal the toolbar', function(done) {
    var browser = this.browser;
    browser.pressButton('< >').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

  it('has a toggle', function(done) {
    var browser = this.browser;
    browser.assert.element('canvas', 'toggle');
    done();
  });

  it('has a button that can be clicked to popup information about using the page', function(done) {
    var browser = this.browser;
    browser.pressButton('?').then(function() {
    assert.ok(browser.success);
    }).then(done, done);
  });

});
