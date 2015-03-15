var load = require('express-load');

module.exports = function FalciGulpTasks (config) {
  
  load(__dirname + '/tasks').into(config);

}