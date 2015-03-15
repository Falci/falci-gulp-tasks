var gulp = require('gulp');

module.exports = function(config){

  gulp.task('build:dev', ['clean:dest', 'copy', 'build:js', 'build:css', 'jade', 'inject']);  
  gulp.task('build:prod', []);

  gulp.task('build:css', buildCss);
  gulp.task('build:js', buildJs);

  function buildCss () {
    
  }

  function buildJs () {
    
  }

}