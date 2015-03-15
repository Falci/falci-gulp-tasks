var gulp = require('gulp'),
    connect = require('gulp-connect');

module.exports = function(config){

  gulp.task('server:dev', serverDev);

  function serverDev () {
    return connect.server(config.server);
  }

}