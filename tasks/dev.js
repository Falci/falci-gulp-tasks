var gulp = require('gulp'),
    runSequence = require('run-sequence');

module.exports = function(config){

  gulp.task('dev', devTask);

  function devTask (next) {
    return runSequence('build', 'server:dev', 'watch:dev', next);
  }

}