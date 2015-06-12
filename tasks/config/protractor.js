/**
 * Protractor settings
 */
module.exports = function(grunt) {
    'use strict';

    grunt.config.set('protractor', {
        options: {
	      configFile: "protractor-conf.js", // Default config file
	      // keepAlive: true, // If false, the grunt process stops when the test fails.
	      noColor: false, // If true, protractor will not use colors in its output.
	      // debug: true,
	      args: {

	      }
	    },
	    e2e: {
	    	options: {
		    	keepAlive: false
		    }
	    }
    });
};