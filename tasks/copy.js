var gulp = require('gulp'),
    debug = require('gulp-debug'),
    gulpFilter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    argv = require('yargs').argv,
    mainBowerFiles = require('main-bower-files');

module.exports = function(config){

  gulp.task('copy', ['copy:assets', 'copy:vendor']);
  gulp.task('copy:assets', copyAssets);
  gulp.task('copy:vendor', copyVendor);

  function copyAssets () {
    return gulp.src(config.files.assets)
      .pipe(debug({title: 'copy:assets: '}))
      .pipe(gulp.dest(config.paths.assets));
  }

  function copyVendor () {
    if(argv.min){
      var filterJS = gulpFilter('*.js'),
          filterCSS = gulpFilter('*.css'),  
          filterFont = gulpFilter(['*.eot', '*.svg','*.ttf', '*.woff', '*.woff2', '*.otf']),
          notFont = gulpFilter(['!*.eot', '!*.svg','!*.ttf', '!*.woff', '!*.woff2', '!*.otf']);

      return gulp.src(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat(config.files.main.vendor.js))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.vendor))
        .pipe(filterJS.restore())

        .pipe(filterCSS)
        .pipe(concat(config.files.main.vendor.css))
        .pipe(gulp.dest(config.paths.vendor))
        .pipe(filterCSS.restore())

        .pipe(filterFont)
        .pipe(gulp.dest(config.paths.vendor + '/fonts'))
        .pipe(filterFont.restore())

        .pipe(notFont)
        .pipe(gulp.dest(config.paths.vendor));

    }

    return gulp.src(mainBowerFiles(),  { base: 'bower_components' })
      .pipe(debug({title: 'copy:vendor: '}))
      .pipe(gulp.dest(config.paths.vendor));
  }

}