var gulp = require('gulp');

module.exports = function(config){

  gulp.task('watch:dev', watchDev);

  function watchDev () {
    gulp.watch(config.files.bower, ['copy:vendor']);
    gulp.watch(config.files.assets, ['copy:assets']);
    gulp.watch(config.files.js, ['build:js']);
    gulp.watch(config.files.less, ['style:less']);
    gulp.watch(config.files.sass, ['style:sass']);
    gulp.watch(config.files.jade, ['jade']);
  }

}