var assert = require('assert');
var namer = require('../src/namer');

describe('Namer', () => {
  it('should greet people happily!', () => {
    assert.equal(namer.greet("Charlotte"), "Hello Charlotte");
  });

  it('should politely bid farewell!', () => {
    assert.equal(namer.farewell("Charlotte"), "Swing low, sweet chariot,... Charlotte");
  })
});
