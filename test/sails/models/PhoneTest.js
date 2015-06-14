var fixtures = require('sails-fixtures');
var chai = require('chai');

describe.only('PhoneModel', function() {

  before(function(done){
    // Load fixtures for this test
    fixtures.init({
      'dir':'test/fixtures',
    }, done);
    chai.should();
  });
         
  describe('#find()', function() {
    it('should return the number of phones loaded in the fixtures', function (done) {
      Phone.find()
        .then(function(results) {
          results.should.have.length(20);
          done();
        })
        .catch(done);
    });
  });

});