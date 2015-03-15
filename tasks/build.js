var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    ngAnnotate  = require('gulp-ng-annotate'),
    connect = require('gulp-connect'),
    header = require('gulp-header'),
    footer = require('gulp-footer');

module.exports = function(config){

  gulp.task('build:dev', buildDev);  
  gulp.task('build:prod', []);

  gulp.task('build:css', ['style:sass', 'style:less']);
  gulp.task('build:js', buildJs);

  function buildDev () {
    return runSequence('clean:dest', ['copy', 'build:js', 'build:css', 'jade'], 'inject');
  }

  function buildJs () {
    return gulp.src(config.files.js)
      .pipe(plumber())
      .pipe(ngAnnotate())
      .pipe(header('(function(){\n\n'))
      .pipe(footer('\n\n})();'))
      .pipe(gulp.dest(config.paths.js))
      .pipe(connect.reload());    
  }

}