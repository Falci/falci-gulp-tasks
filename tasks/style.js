var gulp = require('gulp'),
    debug = require('gulp-debug'),    
    connect = require('gulp-connect'),
    autoprefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    less = require('gulp-less');

module.exports = function(config){

  gulp.task('style:less', styleLess);  
  gulp.task('style:sass', styleSass);

  function styleLess () {
    return gulp.src(config.files.less)
      .pipe(debug({title: 'style:less: '}))
      .pipe(less())      
      .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
      .pipe(gulp.dest(config.paths.css))
      .pipe(connect.reload());
  }

  function styleSass () {
    return gulp.src(config.files.sass)
      .pipe(debug({title: 'style:sass: '}))
      .pipe(sass())
      .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
      .pipe(gulp.dest(config.paths.css))
      .pipe(connect.reload());    
  }

}