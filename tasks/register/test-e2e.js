module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('test-e2e', [
        'test-sails:e2e'
    ]);
};