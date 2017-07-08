const app = require('../src/server');
const LineFile = require('../public/./javascript/line.js');
Browser = require('zombie');
let assert = require('chai').assert;
describe('Line unit/feature tests', function() {

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
    line = new Line(document.getElementById('line').getContext('2d'));
  })

  xit('adds a line to the canvas', function() {
    // unit test unfinished
    // line.context.beginPath();
    // line.context.moveTo(this.drawFromX, this.drawFromY);
    // line.context.lineTo(this.drawToX, this.drawToY);
    // line.context.strokeStyle = "black";
    // line.context.stroke()
  });

  xit('has a line object', function() {
    // unit test unfinished
    // testLine = new Line(391, 705, 678, 240);
    // console.log(testline)
    // assert.testLine.length === 4;
  });

});
