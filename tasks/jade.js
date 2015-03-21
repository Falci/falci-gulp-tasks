var gulp = require('gulp'),
    debug = require('gulp-debug'),
    runSequence = require('run-sequence'),
    argv = require('yargs').argv,
    jade = require('gulp-jade');

module.exports = function(config){

  gulp.task('jade', jadeTask);
  gulp.task('jade:inject', jadeInjectTask);

  function jadeTask () {
    config.jade.pretty = !argv.min;

    return gulp.src(config.files.jade)
      .pipe(debug({title: 'jade: '}))
      .pipe(jade(config.jade))
      .pipe(gulp.dest(config.paths.dest));
  }

  function jadeInjectTask () {
    runSequence('jade', 'inject');
  }

}