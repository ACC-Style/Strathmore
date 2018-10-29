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
var clean = require('gulp-clean');
// Paths

var PATHS ={
    SRC:'./',
    STYLEGUIDE:'./Strathmore',
    DIST:'./dist',
    CSS :'assets/css/**/*.css',
    SCSS: 'assets/scss/**/*.scss',
    JS: 'assets/js/**/*.js',
    FONTS:'assets/fonts/*',
    IMG:'assets/img/*',
    ICONS:'assets/icons/*',
    STYLEGUIDE_OUTPUT : 'Strathmore'
};


// Server
gulp.task('serve',['style'], function () {
	console.log('Gulp: Magic there is a browser!');
  browserSync.init({
    server: './',
    open: "local",
    startPath: PATHS.STYLEGUIDE_OUTPUT + "/index.html"
  });
   gulp.watch(PATHS.STYLEGUIDE_OUTPUT +"/**/*.css" ).on('change', browserSync.reload);
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

// Style Guide Tasks. Build and Copy files for the style guide in local  
gulp.task('styleguide:generate', function() {
	console.log('Gulp Style Guide Tasks');
	console.log('Gulp: Build the Documentation!');
  return gulp.src( SCSS_PATH + '*/**.scss' )
    .pipe(styleguide.generate({
        title: 'Strathmore - Enteprise UI of the ACC',
        server: false,
        rootPath: PATHS.STYLEGUIDE_OUTPUT,
        // extraHead: '<link rel="stylesheet" href="assets/fontawesome-pro/css/all.css" crossorigin="anonymous">',
        appRoot: "/" + PATHS.STYLEGUIDE_OUTPUT,
        overviewPath: 'README.md',
        sideNav: true,
        showReferenceNumbers: true
      }))
    .pipe(gulp.dest(PATHS.STYLEGUIDE_OUTPUT));
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
    .pipe(gulp.dest(PATHS.STYLEGUIDE_OUTPUT));
});



// Package Tasks.   Copy files to the Dist Folder and Copy Style guide to Docs to be set up. 
gulp.task('package',['clean'], function(){
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

// Watch Tasks
// Watch Tasks
gulp.task('watch', ['styleguide'], function () {
  console.log('Gulp Watch Tasks');
  console.log('Gulp: I will be watching you.... even when you sleep');
  gulp.watch([PATHS.SRC + PATHS.SCSS], ['styleguide']);
 

});
// Default
gulp.task('default', ['styleguide', 'serve', 'watch']);
gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles'])
gulp.task('build', ['watch']);
gulp.task('dist',['style']);