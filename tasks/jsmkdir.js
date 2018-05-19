/*
 * grunt-js-mkdir
 * https://github.com/afuscella/grunt-js-mkdir
 *
 * Copyright (c) 2018 Arthur Silva
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask(
    'jsmkdir',
    'Create directories with Grunt (based on grunt-mkdir)',
    function () {

      // Parameter name reserved for directory name.
      var sSrc = 'src';

      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
        mode: null
      });

      // Write options only when options.mode is not empty.
      if (options.mode) {
        grunt.log.writeflags(options, "Parameters (options)");
      }

      // Continues only when src parameter(s) is provided.
      if (!this.data.src) {
        return grunt.log.error("Property '" + sSrc + "' is not defined");

      }

      // Validates input parameter type Array.
      if (!Array.isArray(this.data.src)) {
        return grunt.log.error("Property '" + sSrc + "' should be type Array");

      }

      // Iterate over all specified directories.
      this.data.src.forEach(function (dirpath) {

        if (grunt.file.isDir(dirpath)) {
          return grunt.log.warn("Directory '" + dirpath + " 'already exists");

        }

        try {
          // Creates the directory using the name provided.
          grunt.file.mkdir(dirpath, options.mode);

          return grunt.log.ok("Directory '" + dirpath + "' created successfully");

        } catch (e) {
          grunt.verbose.error(e);
          return grunt.fail.warn('Operation failed. Check for "option.mode" parameter');
        }

      });
    });

};