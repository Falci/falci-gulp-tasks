var gulp = require('gulp'),
    debug = require('gulp-debug'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade');

module.exports = function(config){

  gulp.task('jade', jadeTask);

  function jadeTask () {
    return gulp.src(config.files.jade)
      .pipe(debug({title: 'jade: '}))
      .pipe(jade(config.jade))
      .pipe(gulp.dest(config.paths.dest))
      .pipe(connect.reload());
  }

}