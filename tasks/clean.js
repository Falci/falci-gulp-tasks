var gulp = require('gulp'),
  del = require('del');

module.exports = function(config){

  gulp.task('clean:dest', cleanDest);

  function cleanDest (next) {
    del.sync([config.files.dest]);

    next();
  }

}