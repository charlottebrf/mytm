const app = require('../src/server');
const LineFile = require('../public/./javascript/idea.js');
Browser = require('zombie');
let assert = require('chai').assert;
describe('Idea unit/feature tests', function() {

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

  beforeEach(function() {
    idea = new Idea(document.getElementById('idea').getContext('2d'));
  });

  xit('adds a rectangle idea to the canvas', function() {
    // unit test unfinished
  });

  xit('adds a circle idea to the canvas', function() {
    // unit test unfinished
  });

  xit('has text that is added from the toolbar', function() {
    // unit test unfinished
  });

  xit('has a different fill colour each a shape is created added from the colour picker', function() {
    // unit test unfinished
  });

});
