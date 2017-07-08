let request = require('supertest');
describe('Loading express server tests', function() {
  let server;
  beforeEach(function() {
    delete require.cache[require.resolve('../src/server')];
    server = require('../src/server');
  });
  afterEach(function(done) {
    server.close(done);
  });

  it('responds to /', function testSlash(done) {
    request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request(server)
    .get('/foo/bar')
    .expect(404, done);
  });
});
