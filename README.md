# grunt-js-mkdir v0.1.0 [![Build Status](https://travis-ci.org/afuscella/grunt-js-mkdir.svg?branch=master)](https://travis-ci.org/afuscella/grunt-js-mkdir)

> Create directories with Grunt (based on grunt-mkdir)

## Getting Started
This plugin requires Grunt `^1.0.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-js-mkdir --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-js-mkdir');
```

## The "jsmkdir" task

### Overview
In your project's Gruntfile, add a section named `jsmkdir` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsmkdir: {
    options: {
      // Task-specific options go here.
    },
    src: {
      // Target-specific directories lists.
    }
  },
});
```

### Options

#### src
Type: `Array`
Default value: `[]`

An array of directories to create. Do not use `files`, use `src` always instead.

#### options.mode
Type: `String`
Default value: `0770`

If mode isn't specified, it defaults to `0777 & (~process.umask())`. See [Documentation grunt.file.mkdir](https://gruntjs.com/api/grunt.file#grunt.file.mkdir)

### Usage Examples

#### Default Options
In this example, directory `tmp` and its sub-directories (recursive) will be created with permission parameter `0770` (only owner has permission to access the directory)

```js
grunt.initConfig({
  jsmkdir:- {
    options: {
      mode: 0770
    },
    files: [{
      'tmp', 'tmp/a', 'tmp/b'
    }],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2018-05-18  v0.1.0  First official release for Grunt 0.4.0.
