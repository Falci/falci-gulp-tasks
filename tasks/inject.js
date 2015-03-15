var gulp = require('gulp');

module.exports = function(config){

  gulp.task('inject', ['inject:resources', 'inject:vendor']);
  gulp.task('inject:resources', injectResources);
  gulp.task('inject:vendor', injectVendor);

  function injectResources () {
    
  }

  function injectVendor () {
    
  }

}