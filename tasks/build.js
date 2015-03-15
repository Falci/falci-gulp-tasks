var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    ngAnnotate  = require('gulp-ng-annotate'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv,
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

module.exports = function(config){

  gulp.task('build', build);  
  gulp.task('build:js', buildJs);

  function build (next) {
    return runSequence('clean:dest', ['copy', 'build:js', 'style', 'jade'], 'inject', next);
  }

  function buildJs () {
    return gulp.src(config.files.js)
      .pipe(plumber())
      .pipe(ngAnnotate())
      .pipe(header('(function(){\n\n'))
      .pipe(footer('\n\n})();'))
      .pipe(gulpif(argv.min, concat(config.files.main.js)))
      .pipe(gulpif(argv.min, uglify()))
      .pipe(gulpif(argv.min, header('/* ' + new Date().toString() + ' */\n')))
      .pipe(gulp.dest(config.paths.js));
  }

}