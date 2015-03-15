var gulp = require('gulp');

module.exports = function(config){

  gulp.task('copy', ['copy:assets', 'copy:vendor']);
  gulp.task('copy:assets', copyAssets);
  gulp.task('copy:vendor', copyVendor);

  function copyAssets () {
    gulp.src(config.files.assets)
    .pipe(gulp.dest(config.paths.dest));
  }

  function copyVendor () {
    
  }

}