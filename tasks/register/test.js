module.exports = function(grunt) {
    'use strict';

    grunt.registerTask('test', [
        'compileAssets',
        'test-sails:sails',
        'test-sails:angular'
    ]);
};