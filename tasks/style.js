var gulp = require('gulp'),
    debug = require('gulp-debug'),    
    autoprefix = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin')
    gulpif = require('gulp-if'),
    concat = require('gulp-concat'),
    argv = require('yargs').argv,
    sass = require('gulp-sass'),
    less = require('gulp-less');

module.exports = function(config){

  gulp.task('style', ['style:' + (config.cssEngine || 'sass')]);
  gulp.task('style:less', styleLess);  
  gulp.task('style:sass', styleSass);

  function styleLess () {
    return gulp.src(config.files.less)
      .pipe(debug({title: 'style:less: '}))
      .pipe(less())      
      .pipe(gulpif(argv.min, cssmin()))
      .pipe(gulpif(argv.min, concat(config.files.main.css)))
      .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
      .pipe(gulp.dest(config.paths.css));
  }

  function styleSass () {
    return gulp.src(config.files.sass)
      .pipe(debug({title: 'style:sass: '}))
      .pipe(sass())
      .pipe(gulpif(argv.min, cssmin()))
      .pipe(gulpif(argv.min, concat(config.files.main.css)))
      .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
      .pipe(gulp.dest(config.paths.css));
  }

}