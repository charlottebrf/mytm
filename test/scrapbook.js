// process.env.NODE_ENV = 'test';
// const idea = require('../public/javascript/idea.js');
// const http = require('http').createServer(app).listen(8000);
// Browser.localhost('localhost', 8000);
//
// let request = require('supertest');
// const chai = require('chai').expect;
// const browser = require('zombie');
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
//   //
//   // before (function() {
//   //   this.browser.visit('/');
//   //   });
//
//     it('should have a blank canvas', function() {
//       browser.expect.element('#canvas');
//     });
// });

//
// describe('User sees blank canvas', function() {
//
//   before(function() {
//     this.server = http.createServer(app).listen(8000);
//     this.browser = new Browser({ site: 'http://localhost:8000'});
//   });
//
//   before (function(done) {
//     this.browser.visit('/index', done);
//   });
//
//
//
//   it('should have a blank canvas', function() {
//     this.browser.assert.element('#canvas');
//   });
//   //
//   // it('should show an addded object', function() {
//   //   canvasObject = new Idea(document.getElementById('canvas').getContext('2d'));
//   //   // canvasObject.context.fillStyle = "cornflowerblue"
//   //   this.browser.assert.element('#canvas1')
//   //   // canvasObject.context.clear();
//   // });
//
//   after(function(done) {
//     this.server.close(done);
//   });
//
// });
