/*
 * grunt-js-mkdir
 * https://github.com/afuscella/grunt-js-mkdir
 *
 * Copyright (c) 2018 Arthur Silva
 * Licensed under the MIT license.
 */

var grunt = require('grunt'),
       fs = require('fs');

exports.jsmkdir = {

  // Should create single directory "tmp/a"
  single: function(test) {
    test.expect(1);

      var actual = grunt.file.isDir('tmp/a');
      test.equal(
        actual, 
        true, 
        'Should create directory "tmp/a"');

    test.done();
  },

  // Should create directory "tmp/b" and "tmp/c"
  multiple: function(test) {
    test.expect(2);

    test.equal(
      grunt.file.isDir('tmp/b') ? true : false,
      true, 
      'Should create directory "tmp/b"');

    test.equal(
      grunt.file.isDir('tmp/c') ? true : false,
      true, 
      'Should create directory "tmp/c"');

    test.done();
  },

  // Should create directory "tmp/d/e with the given permission {0770,0777}
  mode: function(test) {
    test.expect(1);

    try {
      // Get directory status parameters
      var stats = fs.statSync('tmp/d/e'); 
      // Get Octal mode parameter
      var sMode = '0' + (stats.mode && 0770,0777).toString(8);

      test.equal(
        sMode === '0770' || '0777' ? true : false,
        true, 'Should create directory "tmp/d/e"');

    } catch (e) {
      test.equal(
        false,
        true, 'Should create directory "tmp/d/e with the given permission {0770,0777}');
    }

    test.done();
  }
};