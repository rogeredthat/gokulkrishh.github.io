---
layout: post
title: Task automation using grunt and gulp
description: Task automation using grunt and gulp
date:   2014-10-27
categories: gulp
comments: true
read_time: 15
image: /images/gulp/gulpvsgrunt.gif
---

# Task automation using Grunt and Gulp

In web application development, there are numerous tasks involved like `minify`, `uglify` and `compressing` JS and CSS files. Doing these tasks manually will take almost 30% - 40% of the development time. So today we are going to automate above mentioned tasks using <a href="http://gulpjs.com/" class="link" target="_blank">Gulp</a> and <a href="http://gruntjs.com/" class="link" target="_blank">Grunt</a>. Lets hit the road.

## Grunt

Grunt is a javascript task runner. Latest version of grunt is `v0.4.5` There are lots of grunt <a href="http://gruntjs.com/plugins" class="link" target="_blank">plugins</a> available. But we will see few important plugins.

#### Plugins:

- <a href="https://github.com/gruntjs/grunt-contrib-jshint" class="link" target="_blank">jshint</a> - To check <a href="http://www.jshint.com/docs/" class="link" target="_blank">hint</a> error in JS files.

- <a href="https://github.com/gruntjs/grunt-contrib-uglify" class="link" target="_blank">uglify</a> - To minify JS files.

- <a href="" class="link" target="_blank">cssmin</a> - To minify CSS files.

- <a href="https://github.com/gruntjs/grunt-contrib-watch" class="link" target="_blank">watch</a> - To watch file changes and do minify and reload the browser.

- <a href="https://github.com/gruntjs/grunt-contrib-connect" class="link" target="_blank">connect</a> - To create a development server to test the application.

- <a href="https://github.com/gruntjs/grunt-contrib-copy" class="link" target="_blank">copy</a> - To copy files to build folder.


#### Requirement:

- <a href="http://nodejs.org/" class="link" target="_blank">Node.js</a>

After installing node, type the below command in terminal

```bash
npm install -g grunt-cli
```

`-g` is to install globally.

Below is the `package.json` file

```json
{
 "name" : "some-name" //mandatory
 "version" : "0.0.1" //mandatory,
 "description" : "A simple task runner",
 "devDependencies" : { //all dependency plugins for automation
    "devDependencies" : {
    "grunt" : "~0.4.5",
    "grunt-contrib-jshint" : "*", //* is for latest version
    "grunt-contrib-concat" : "*",
    "grunt-contrib-uglify" : "*",
    "grunt-contrib-cssmin" : "*",
    "grunt-contrib-watch" : "*",
    "jshint-stylish" : "*",
 }
}
```

Complete package.json file can be found <a href="https://github.com/gokulkrishh/Grunt-Task-Runner/blob/master/package.json" class="link" target="_blank">here</a>.

Let's write a task which minifies, concat JS and CSS files and watches the file changes.

```js
//this will enclose the grunt configuration
module.exports = function(grunt) {

//initialize the configuration
grunt.initConfig({
  //get config from package.json file
  pkg: grunt.file.readJSON('package.json'),

  //check errors in JS files
  jshint: {
    //'dest' : 'source'
    build: ['app/js/main.js']
  },

  //minify anc concat js files into build folder as single file
  uglify: {
    build: {
      files: {
        //'dest' : 'source'
        "build/js/all.min.js": ['app/js/main.js']
      }
    }
  },

  //minify and concat css files into build folder as single file
  cssmin: {
    build: {
      files: {
        'build/css/styles.css' : ['app/css/styles.css']
      }
    }
  },

  //Watch files change and do minify and concat on the changed file
  watch: {
    scripts: {
      files: ['app/js/main.js'],
      tasks: ['jshint', 'uglify'],
      options: {
        spawn: false,
      },
    },
    css: {
      files: ['app/css/styles.css'],
      tasks: ['cssmin']
    },
  }
});

//registering the task
grunt.registerTask('jshint');
grunt.registerTask('uglify');
grunt.registerTask('cssmin');

//run all the task using grunt in terminal
grunt.registerTask('default', ['cssmin', 'jshint', 'uglify', 'watch']);

//load the grunt plugins, installed through package.json
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

};
```

<!-- Download the full <a href="" class="link" target="_blank">grunt task runner</a>. -->

#### Full grunt task runner from my git repo

<a href="https://github.com/gokulkrishh/Grunt-Task-Runner" target="_blank">Download</a>

## Gulp

Gulp is stream builder which uses code-over-configuration using <a href="http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options" class="link" target="_blank">node's streams</a>. Latest version of gulp is `v3.8.9`. There are more than 750 <a href="http://gulpjs.com/plugins" class="link" target="_blank">plugins</a> available for gulp. As i mentioned gulp uses code instead of configuration written in grunt. If you are familiar with node, then writing a task in gulp is very simple.

Let's see an example

```js
var gulp = require('gulp');

//task name with any dependency and a callback function
gulp.task('sample', ['other-task'], function () {
  //run after finishing other-task
  console.log('---------- Running sample task ---->>>');
});

gulp.task('other-task', function () {
  console.log('----- I will run before sample task ---->>>');
});
```

If you run the above task, using `gulp sample` in the terminal. First, another task will run and after that sample, the task will print the message in terminal. Okay, let's write some tasks using following gulp plugins.

1. <a href="https://www.npmjs.org/package/gulp-jshint" class="link" target="_blank">jshint</a> - To check hint error

2. <a href="https://www.npmjs.org/package/gulp-minify-css" class="link" target="_blank">minify-css</a> - To minify CSS files

3. <a href="https://www.npmjs.org/package/gulp-uglify" class="link" target="_blank">uglify</a> - To minify JS files

4. <a href="https://www.npmjs.org/package/gulp-concat" class="link" target="_blank">concat</a> - To make a single file

5. <a href="https://www.npmjs.org/package/gulp-watch" class="link" target="_blank">watch</a> - To watch file changes

6. <a href="https://www.npmjs.org/package/gulp-webserver" class="link" target="_blank">server</a> - To create local development server

```js
var gulp = require('gulp'),
var jshint = require('gulp-jshint'),
var stylish = require('jshint-stylish'),
var concat = require('gulp-concat'),
var uglify = require('gulp-uglify');

//check errors in JS files and do uglify, concat

gulp.task('scripts', function() {
  //print in terminal
  console.log('---------------------------->>> SCRIPTS Task');
  //get source files and pipe() to another method or function
  return gulp.src('app/js/main.js')
  .pipe(jshint('.jshintrc')) //check errors in JS files
  .pipe(jshint.reporter(stylish))
  .pipe(uglify()) //uglify
  .pipe(concat('all.js')) //concat JS files into all.js file
  .pipe(gulp.dest('build/js')) //copy all.js file to build/js folder
});

//minify and concat css files into build folder as single file
gulp.task('styles', function() {
  console.log('----------------------------->>> STYLES Task');
  return gulp.src('app/css/styles.css')
  .pipe(uglify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function() {
  console.log('----------------------------->>> WATCHING FILES');
  //gulp.watch('source files', 'task name to run')

  gulp.watch('app/css/styles.css', ['styles']);
  gulp.watch('app/js/main.js', ['script']);
});

//Just type gulp in terminal to run styles, scripts, watch tasks
gulp.task('default', ['styles', 'scripts', 'watch']);

//OR type gulp<space>scripts, gulp<space>styles to run task individually

```

<!-- Download full <a href="" class="link" target="_blank">gulp task runner</a>. -->

#### Full gulp task runner from my git repo

<a href="https://github.com/gokulkrishh/Gulp-task-runner" target="_blank">Download</a>

The `pipe()` in gulp reads from a readable stream and writes to a writeable stream and more explanation about pipe can be found <a href="http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options" class="link" target="_blank">here</a>. Writing a task in gulp is much simpler than the grunt. Each of them has their own advantages. But we are not going to the war of which is better. Use grunt or gulp whatever you feel right for you.

If you like this post tweet and share it. Thanks.
