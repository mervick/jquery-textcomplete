/*jshint node: true */

module.exports = function (grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: 'jquery.textcomplete.min.map'
      },
      all: {
        files: {
          'jquery.textcomplete.min.js': [
            'jquery.textcomplete.js'
          ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '../',
          keepalive: true,
          hostname: '0.0.0.0'
        }
      }
    }
  });

  grunt.registerTask('default', ['connect']);
};
