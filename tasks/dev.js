var gulp = require('gulp');

module.exports = function(config){

  gulp.task('dev', ['build:dev', 'server:dev', 'watch:dev']);

}