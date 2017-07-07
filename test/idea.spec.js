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

  it('finds a canvas on the homepage', function(done) {
    var browser = this.browser;
    browser.assert.text('h1', 'mind mapp');
    done();
  });
});



// Browser = require('zombie');
// let assert = require('chai').assert;
// // let request = require('supertest');
//
// describe('loading express', function() {
//   let server;
//   beforeEach(function() {
//     delete require.cache[require.resolve('../src/server')];
//     server = require('../src/server');
//   });
//   afterEach(function(done) {
//     server.close(done);
//   });
//
//   beforeEach(function() {
//     browser = new Browser();
//   });
//
//   b

  // it('should visit the home page', function(done) {
  //   browser.visit('/', function() {
  //     assert(browser.text("#h1") === "mind mapp",
  //       "heading app must be present");
  //
  //       done();
  //   })
  // })

// describe('User visits index page', function() {
//   const browser = new Browser();
//
//   before(function(done) {
//     browser.visit('/', done);
//   });
//
//   it('sees a canvas when page is loaded', function() {
//      browser.assert.element('#canvas');
//   });
//
//
// })
// });


 // const http = require('http');
 //  process.env.NODE_ENV = 'test';
 //  const app = require('../src/server');
 //  const Browser = require('zombie');
 //
 //  describe('User sees blank canvas', function() {
 //
 //    before(function() {
 //      this.server = http.createServer(app).listen(8080);
 //      this.browser = new Browser({ site: 'http://localhost:8080'});
 //    });
 //
 //    before (function(done) {
 //      this.browser.visit('/', done);
 //    });
 //
 //    it('should have a blank canvas', function() {
 //      this.browser.assert.element('#canvas');
 //    });
 //
 //    after(function(done) {
 //      this.server.close(done);
 //    });
 //
 //  });
