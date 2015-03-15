var gulp = require('gulp'),
    webserver = require('gulp-webserver');

module.exports = function(config){

  gulp.task('server:dev', serverDev);

  function serverDev () {    
    return gulp.src(config.paths.dest)
      .pipe(webserver(config.server));
  }

}