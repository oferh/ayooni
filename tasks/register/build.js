module.exports = function (grunt) {
	grunt.registerTask('build', [
        'bower',
		'compileAssets',
		'linkAssetsBuild',
		'clean:build',
		'copy:build'
	]);
};
