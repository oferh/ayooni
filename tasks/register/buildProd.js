module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
        'bower',
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
