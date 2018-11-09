'use strict';
var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pixrem = require('pixrem');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
// Paths

var PATHS ={
    SRC:'./',
    DIST:'./dist',
    CSS :'assets/css/**/*.css',
    SCSS: 'assets/scss/**/*.scss',
    JS: 'assets/js/**/*.js',
    FONTS:'assets/fonts/*',
    IMG:'assets/img/*',
    ICONS:'assets/icons/*',
};


// Server
gulp.task('serve',['style'], function () {
	console.log('Gulp: Magic there is a browser!');
  browserSync.init({
    server: './',
    open: "local",
    startPath: PATHS.STYLEGUIDE_OUTPUT + "/index.html"
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
   return gulp.src( PATHS.SRC + PATHS.STYLEGUIDE_OUTPUT)
   .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(PATHS.SRC + PATHS.STYLEGUIDE_OUTPUT));
});


// Cleaning Tasks
gulp.task('clean', function(){
  console.log(' Gulp Cleaning Tasks');
  console.log('Gulp: Hold on I am busy cleaning up this mess.  Why do you leave things just lying around.');
  return gulp.src(PATHS.DIST, {
      read: false
    })
    .pipe(clean());
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






// Package Tasks.   Copy files to the Dist Folder and Copy Style guide to Docs to be set up. 
gulp.task('package',['clean','addAutomation'], function(){
  console.log('Gulp Package Tasks');
  console.log('Gulp: I got a box and some bubble-wrap; now, where is the tape?');
  console.log('Gulp: All packed up');
  return gulp.src([
    PATHS.SRC + PATHS.CSS,
    PATHS.SRC + PATHS.FONTS,
    PATHS.SRC + PATHS.ICONS,
    PATHS.SRC + PATHS.JS,
    PATHS.SRC + PATHS.IMG,
    PATHS.SRC + PATHS.SCSS
  ],{base:"./"}).pipe(gulp.dest(PATHS.DIST));
});
gulp.task('addAutomation',function(){
  gulp.src("dist-package.json").pipe(rename(package.json)).pipe(gulp.dest(PATHS.DIST));
})

// Watch Tasks
// Watch Tasks
gulp.task('watch', function () {
  console.log('Gulp Watch Tasks');
  console.log('Gulp: I will be watching you.... even when you sleep');
  gulp.watch([PATHS.SRC + PATHS.SCSS], ['style']);
});
// Default
gulp.task('default', ['style', 'watch']);
