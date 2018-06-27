module.exports = function(grunt) {
    var gulp = require('gulp'),
        styleguide = require('sc5-styleguide');
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: ''
                }
            }
        },
        'dart-sass': {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/scss',
                    src: ['**/*.scss'],
                    dest: 'assets/css/',
                    ext: '.css'
                }]
            }
        },
        gulp: {
            'styleguide-generate': function() {
                var outputPath = 'strathmore/';
                return gulp.src(['assets/css/index.css']).pipe(styleguide.generate({
                    title: 'Strathmore - Enteprise UI of the ACC',
                    server: false,
                    rootPath: outputPath,
                    appRoot:'/Strathmore',
                    sideNav: true,
                    showReferenceNumbers: true,
                    overviewPath: 'README.md'
                })).pipe(gulp.dest(outputPath));
            },
            'styleguide-applystyles': function() {
                return gulp.src('assets/css/index.css').pipe(styleguide.applyStyles()).pipe(gulp.dest('strathmore'));
            }
        },
        phantomcss: {
            desktop: {
                options: {
                    screenshots: 'baselines/desktop',
                    results: 'results/desktop',
                    viewportSize: [1280, 800]
                },
                src: ['tests/phantomcss/start.js', 'tests/phantomcss/*-test.js']
            }
        },
        copy: {
            styleguide: {
                expand: true,
                src: ['assets/fonts/*', 'assets/css/**/*.css', 'assets/images/*'],
                dest: 'strathmore/',
            },
            docs:{
                expand: true,
                   cwd: 'strathmore',
                    src: '**',
                dest: 'docs/',
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                // or
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'assets/css/maps/' // ...to the specified directory
                },
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            options: {
                diff: 'assets/css/diff/index.css.diff',
            },
            dist: {
                src: 'assets/css/*.css',
            }
        },
        watch: {
            css: {
                files: 'assets/scss/**/*.scss',
                tasks: [ 'dart-sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles','copy'],
                options: {
                    livereload: true,
                }
            },
            markdown: {
                files: '*.md',
                task: ['gulp:styleguide-generate', 'gulp:styleguide-applystyles','copy'],
                options: {
                    livereload: true,
                },
            }
        }
    });
    grunt.registerTask('default', ['connect', 'dart-sass', 'gulp:styleguide-generate', 'gulp:styleguide-applystyles','copy','watch']);
}