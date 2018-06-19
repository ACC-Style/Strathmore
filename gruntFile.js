module.exports = function(grunt){
require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
  
grunt.initConfig({
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
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
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
});
grunt.registerTask('default', [
    'dart-sass'
    ]);
}