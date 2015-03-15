var dest = '/dest',
    src = '/src';

module.exports = {

  files: {
    assets: [src + '/assets/*'],
    dest: dest.concat('/*')
  },

  paths: {
    dest: dest
  }

};