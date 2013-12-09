'use strict';

var grunt = require('grunt');

module.exports = function () {
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-conventional-changelog');

  grunt.registerTask('release', [
    'bump',
    'changelog'
  ]);

  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'],
        commit: true,
        commitMessage: 'bumps version to %VERSION%',
        commitFiles: ['package.json'], // '-a' for all files
        createTag: false,
        push: false
      }
    },
    changelog: {
      options: {
        // Task-specific options go here.
      }
    }
  });
};