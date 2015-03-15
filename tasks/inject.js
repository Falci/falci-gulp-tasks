var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files');

module.exports = function(config){

  gulp.task('inject', injectTask);
  gulp.task('inject:resources', injectResources);
  gulp.task('inject:vendor', injectVendor);

  function injectTask () {
    return runSequence('inject:resources', 'inject:vendor');
  }

  function injectResources () {
    var resources = gulp.src(config.files.resources);

    return gulp.src(config.files.html)
      .pipe(debug({title: 'inject:resources: '}))
      .pipe(inject(resources, {
        transform: function (filepath, file, i, length) {
          var newFilePath = filepath.replace('/' + config.paths.dest, config.cdn.resources);

          return inject.transform.apply(inject.transform, [newFilePath, file, i, length]);
        }
      }))
      .pipe(gulp.dest(config.paths.dest));
  }

  function injectVendor () {
    var resources = gulp.src(mainBowerFiles(), {read: false});

    return gulp.src(config.files.html)
      .pipe(debug({title: 'inject:vendor: '}))
      .pipe(inject(resources, {
        name: 'bower',
        transform: function (filepath, file, i, length) {
          var newFilePath = filepath.replace(config.paths.bower, config.cdn.vendor); 

          return inject.transform.apply(inject.transform, [newFilePath, file, i, length]);
        }
      }))
      .pipe(gulp.dest(config.paths.dest));
    
  }

}