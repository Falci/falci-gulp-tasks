var gulp = require('gulp'),
    debug = require('gulp-debug'),
    connect = require('gulp-connect'),
    mainBowerFiles = require('main-bower-files');

module.exports = function(config){

  gulp.task('copy', ['copy:assets', 'copy:vendor']);
  gulp.task('copy:assets', copyAssets);
  gulp.task('copy:vendor', copyVendor);

  function copyAssets () {
    return gulp.src(config.files.assets)
      .pipe(debug({title: 'copy:assets: '}))
      .pipe(gulp.dest(config.paths.assets))
      .pipe(connect.reload());
  }

  function copyVendor () {
    return gulp.src(mainBowerFiles(),  { base: 'bower_components' })
      .pipe(debug({title: 'copy:vendor: '}))
      .pipe(gulp.dest(config.paths.vendor))
      .pipe(connect.reload());
  }

}