module.exports = (router) => {
  const accounts = require("../controllers/accounts.controller.js");

  // Create a new create
  //  router.post("/accounts", accounts.create);

  // Update 
  //  router.put("/accounts/:id", accounts.update);

  router.get("/accounts", accounts.getlist);

  // все поля записи
  router.get("/account/:id", accounts.getrecacc);

}