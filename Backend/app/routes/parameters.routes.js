module.exports = (router) => {
  const parameters = require("../controllers/parameters.controller.js");

  // справочник заданного типа
  router.get("/parameters/:type", parameters.getlist);

  // Update 
  router.put("/parameter/:id", parameters.update);

  // Create a new create
  router.post("/parameter", parameters.create);
}