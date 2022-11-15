module.exports = app => {
  var router = require("express").Router();

  require("./accounts.routes.js")(router);
  require("./users.routes.js")(router);
  require("./demands.routes.js")(router);
  require("./trails.routes.js")(router);
  require("./parameters.routes.js")(router);

  app.use('/api/task', router);
};