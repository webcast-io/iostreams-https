
'use strict';

var ioStream = require('iostreams')();
var assert   = require('assert');
var streamHash = require('./streamHash');
var provider = require('../');

ioStream.use(provider);

describe('iostreams-https', function() {

  before(function(done) {
    require('./server').listen(3000, function(err) {
      assert.ifError(err);
      done();
    });
  });

  describe('getProviderByProtocol', function() {

    it('should return a https instance based on the https: protocol', function() {
      assert.deepEqual(ioStream.getProviderByProtocol('https:'), provider);
    });

  });

  describe('getInputStream', function() {

    it('should provide a stream given a correct https string', function(done) {
      ioStream.getInputStream('https://localhost:3000/kitten1.jpg', function(err, stream) {
        assert.ifError(err);
        streamHash(stream, function(err, hash) {
          assert.ifError(err);
          assert.equal(hash, '89cd51c0ff0fe629a8980272f120de71');
          done();
        });
      });
    });
    it('should provide an error given a non 2xx status code (more than 299)', function(done) {
      ioStream.getInputStream('https://localhost:3000/300', function(err) {
        assert.equal(err.message, 'Non 2xx statusCode: 300');
        done();
      });
    });
    it('should provide an error given a non 2xx status code (less than 200)', function(done) {
      ioStream.getInputStream('https://localhost:3000/199', function(err) {
        assert.equal(err.message, 'Non 2xx statusCode: 199');
        done();
      });
    });

  });

  describe('getOutputStream', function() {

    it('should provide a stream given a correct https string');
    // it('should provide a stream given a correct https string', function(done) {
    //   ioStream.getOutputStream('https://localhost:3000/get_hash', function(err, stream) {
    //     assert.ifError(err);

    //     var kitten = fs.createReadStream(__dirname + '/assets/kitten2.jpg');
    //     var buf = '';

    //     stream.on('response', function(res) {

    //       res.on('data', function(data) {
    //         buf += data
    //       });

    //       res.on('end', function() {
    //         assert.equal(buf, 'b5bbe413bbdc2536205bb798fe19ea27');
    //       });

    //     });

    //     kitten.pipe(stream);
    //     stream.end();

    //   });
    // });
    it('should provide an error given a https string with no https at path');
    it('should provide an error given a correct object input');
    it('should provide an error given a https object with no https at path');

  });

});
