var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    debug = require('gulp-debug'),
    argv = require('yargs').argv,
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files');

module.exports = function(config){

  gulp.task('inject', injectTask);
  gulp.task('inject:resources', injectResources);
  gulp.task('inject:vendor', injectVendor);

  function injectTask (next) {
    return runSequence('inject:resources', 'inject:vendor', next);
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

    var filesMin = [config.paths.vendor + '/' + config.files.main.vendor.js, config.paths.vendor + '/' + config.files.main.vendor.css];
    var files = argv.min ? filesMin : mainBowerFiles();
    var resources = gulp.src(files, {read: false});

    return gulp.src(config.files.html)
      .pipe(debug({title: 'inject:vendor: '}))
      .pipe(inject(resources, {
        name: 'bower',
        transform: function (filepath, file, i, length) {
          var newFilePath = filepath.replace(config.paths.bower, config.cdn.vendor); 
          newFilePath = newFilePath.replace('/' + config.paths.dest, '');

          return inject.transform.apply(inject.transform, [newFilePath, file, i, length]);
        }
      }))
      .pipe(gulp.dest(config.paths.dest));
    
  }

}