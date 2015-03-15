var gulp = require('gulp'),
    debug = require('gulp-debug'),
    argv = require('yargs').argv,
    jade = require('gulp-jade');

module.exports = function(config){

  gulp.task('jade', jadeTask);

  function jadeTask () {
    config.jade.pretty = !argv.min;

    return gulp.src(config.files.jade)
      .pipe(debug({title: 'jade: '}))
      .pipe(jade(config.jade))
      .pipe(gulp.dest(config.paths.dest));
  }

}