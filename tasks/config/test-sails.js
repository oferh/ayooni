/**
 * Run sails tests
 */
module.exports = function(grunt) {

	grunt.config.set('test-sails', {
		sails: {
          options: {
            timeout: 500,
            reporter: 'tap',
            fullTrace: true
          },
          src: ['test/sails/**/*.js']
		},
        angular : {},
        e2e: {}
	});
};
