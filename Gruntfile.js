/*
 * grunt-js-mkdir
 * https://github.com/afuscella/grunt-js-mkdir
 *
 * Copyright (c) 2018 Arthur Silva
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    tmpDir: 'tmp',

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new directory, remove any previously-created files.
    clean: {
      all: ["<%=tmpDir%>"]
    },

    // Configuration to be run (and then tested).
    jsmkdir: {

      // No 'src' defined.
      nosrc: {},

      // No 'options' defined.
      noop: {
        src: 
          "tmp/x"
      },

      // Create single directory.
      single: {
        options: {
        },
        src: [
          'tmp/a'
        ]
      },

      // Create multiple directories.
      multiple: {
        options: {
        },
        src: [
          'tmp/b',
          'tmp/c'
        ]
      },

      // Create directory with permission.
      mode: {
        options: {
          mode: '0770'
        },
        src: [
          'tmp/d/e'
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'clean', 'jsmkdir', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};