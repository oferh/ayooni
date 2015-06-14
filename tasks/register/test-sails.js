var SailsApp = require('sails').Sails;


// Run Mocha tests
var runMocha = function(cb) {
  'use strict';
  
  var path = require('path'),
      Mocha = require('mocha');
  
  var options = this.options(),
      mocha_instance = new Mocha(options);

    this.filesSrc.forEach(mocha_instance.addFile.bind(mocha_instance));

    // We will now run mocha asynchronously and receive number of errors in a
    // callback, which we'll use to report the result of the async task by
    // calling done() with the appropriate value to indicate whether an error
    // occurred.

    mocha_instance.run(function(errCount) {
      var withoutErrors = (errCount === 0);
      mocha_instance = null;
      // Run the callback in ansync so there are no conflicts
      setTimeout (function(){
        cb(withoutErrors);
      }, 0);
    });
  
}

// Run a grunt task asynchronously
var runTask = function(task, grunt, cb) {
  'use strict';
  
  var spawnOptions = { stdio: 'inherit' };
  
  grunt.util.spawn({
      grunt: true,  
        args: [task].concat(grunt.option.flags()),
        opts: spawnOptions
    }, function (err, result, code) {
        var result = 0;
        if (err || code > 0) {
            grunt.warn(result.stderr || result.stdout);
        }
        grunt.log.writeln('\n' + result.stdout);
        cb(err);
    });
}

// Callback to stop sails
var lowerSails = function(sails, grunt, done, err) {
  'use strict';
  
  sails.lower(function(sailsError){
    if (sailsError) {
      grunt.log.error(sailsError);
    }
    sails = null;
    // Run in async to make sure there are no cnflicts
    setTimeout(function(){
      done(err);
    }, 100);
  });
}

module.exports = function(grunt) {
    'use strict';

    process.env.NODE_ENV = 'test';
  
    grunt.registerMultiTask('test-sails', 'create a sails instance for tests', function(){
      var done = this.async(),
          sails = new SailsApp(),
          self = this;
      
      sails.lift({
        log: {
          noShip: true
        },
        port: 9337
      }, function(err, server) {
        sails = server;
        if (err) {
          grunt.log.error(err);
          return done(false);
        }
        switch (self.target) {
          case 'sails':
            runMocha.call(self, lowerSails.bind(self,sails, grunt, done));
            break;
          case 'angular':
            runTask.call(self, 'karma', grunt, lowerSails.bind(self,sails, grunt, done));
            break;
          case 'e2e':
            runTask.call(self, 'protractor', grunt, lowerSails.bind(self,sails, grunt, done));
            break;
          default:
            grunt.log.error('Unknown test option: ' + self.target);
            lowerSails(sails, grunt, done, false);
        }
      });
      
    });
};