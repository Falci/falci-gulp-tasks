var gulp = require('gulp'),
    runSequence = require('run-sequence');

module.exports = function(config){

  gulp.task('dev', devTask);

  function devTask () {
    return runSequence('build:dev', 'server:dev', 'watch:dev');
  }

}