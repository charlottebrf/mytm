const app = require('../src/server');
const LineFile = require('../public/./javascript/canvas.js');
Browser = require('zombie');
let assert = require('chai').assert;
describe('Canvas unit/feature tests', function() {

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
    line = new Line(document.getElementById('canvas').getContext('2d'));
  });

  xit('has ideas that are added to the canvas using the rectangle or circle button', function() {
    // unit test unfinished
  });

  xit('has ideas that can be dragged to different locations on the canvas using a mouse click', function() {
    // unit test unfinished
  });

  xit('starts to draw a line on the canvas on a double click' , function() {
    // unit test unfinished
  });

  xit('finishes drawing the line on the canvas on a second double click' , function() {
    // unit test unfinished
  });

  xit('finishes drawing the line on the canvas on a second double click' , function() {
    // unit test unfinished
  });

  xit('is cleared if the user clicks on the reset button' , function() {
    // unit test unfinished
  });

  xit('is cleared if the user clicks on the reset button' , function() {
    // unit test unfinished
  });

  xit('can have all of the lines cleared if the user clicks on the clear lines button' , function() {
    // unit test unfinished
  });

});
