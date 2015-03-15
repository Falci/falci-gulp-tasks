var load = require('express-load');

module.exports = function FalciGulpTasks (config) {
  
  load('tasks').into(config);

}