'use strict';
var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pixrem = require('pixrem');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var styleguide = require('sc5-styleguide');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();
// Paths


var SCSS_PATH = "./assets/scss/";
var CSS_PATH = "./assets/css/";
var STYLEGUIDE_PATH = 'Strathmore';

// Server
gulp.task('serve',['style'], function () {
	console.log('Gulp: Magic there is a browser!');
  browserSync.init({
    server: true
  });
});

// Style Tesks
gulp.task('style', function(){
  console.log('Gulp Style Tasks');
  console.log('Gulp: I am making this pretty.');
  var plugins = [
  		pixrem(),
      autoprefixer({browsers: ['last 2 version']}),
      cssnano(),

    ];
   return gulp.src( SCSS_PATH  + '**/*.scss')
   .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest( CSS_PATH ))
    .pipe(browserSync.stream());
});


// Cleaning Tasks
gulp.task('clean', function(){
  console.log(' Gulp Cleaning Tasks');
  console.log('Gulp: Hold on I am busy cleaning up this mess.  Why do you leave things just lying around.');
});


// Script Tasks
gulp.task('script', function(){
  console.log(' Gulp Script Tasks');
  console.log('Gulp: This bit goes here and this attaches here. Now where is tab "Omega"?');
});

// Image Tasks
gulp.task('images', function(){
  console.log('Gulp Images Tasks');
  console.log('Gulp: This is pretty what happens when I smash it!');
});

// Style Guide Tasks. Build and Copy files for the style guide in local  
gulp.task('styleguide:generate', function() {
	console.log('Gulp Style Guide Tasks');
	console.log('Gulp: Build the Documentation!');
  return gulp.src( SCSS_PATH + '*/**.scss' )
    .pipe(styleguide.generate({
        title: 'Strathmore - Enteprise UI of the ACC',
        server: false,
        rootPath: STYLEGUIDE_PATH,
        // extraHead: '<link rel="stylesheet" href="assets/fontawesome-pro/css/all.css" crossorigin="anonymous">',
        appRoot: "/Strathmore",
        overviewPath: 'README.md',
        sideNav: true,
        showReferenceNumbers: true
      }))
    .pipe(gulp.dest(STYLEGUIDE_PATH));
});

gulp.task('styleguide:applystyles', function() {
	console.log('Gulp Style Guide Tasks');
	console.log('Gulp: Write it down and record it!');
  return gulp.src([
      './assets/scss/index.scss',
      './assets/fontawesome-pro/scss/fontawesome.scss',
      './assets/fontawesome-pro/scss/regular.scss',
      './assets/fontawesome-pro/scss/solid.scss',
      './assets/fontawesome-pro/scss/light.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(STYLEGUIDE_PATH));
});



// Package Tasks.   Copy files to the Dist Folder and Copy Style guide to Docs to be set up. 
gulp.task('package', function(){
  console.log('Gulp Package Tasks');
  console.log('Gulp: I got a box and some bubble-wrap; now, where is the tape?');
});

// Watch Tasks
// Watch Tasks
gulp.task('watch', ['styleguide'], function () {
  console.log('Gulp Watch Tasks');
  console.log('Gulp: I will be watching you.... even when you sleep');
  gulp.watch(["./assets/scss/**/index.scss"], ['styleguide:generate','styleguide:applystyles']);

});
// Default
gulp.task('default', ['styleguide:generate', 'styleguide:applystyles', 'serve', 'watch']);
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);