var rootPath = process.env.PWD = process.cwd(),
    dest = 'dest',
    src = 'src';

module.exports = {

  files: {
    assets: src.concat('/assets/**'),
    bower: 'bower_components/**',
    dest: dest.concat('/**'),
    html: dest.concat('/index.html'),
    jade: src.concat('/index.jade'),
    js: [src + '/**/*.js', '!**/*-spec.js'],
    less: src.concat('/style/**.less'),
    resources: [dest.concat('/css/**'), dest.concat('/js/**')],
    sass: src.concat('/style/**.scss')
  },

  paths: {
    dest: dest,
    assets: dest.concat('/assets'),
    bower: '/bower_components',
    css: dest.concat('/css'),
    js: dest.concat('/js'),
    vendor: dest.concat('/vendor')
  },

  // resources path prefix
  cdn: {
    resources: '',
    vendor: '/vendor'
  }, 

  jade: {
    pretty: true
  },

  server: {
    root: dest,
    livereload: true,
    port: 8000,
    open: true
  }

};