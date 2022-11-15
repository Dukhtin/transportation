module.exports = (router) => {
  const trails = require("../controllers/trails.controller.js");

  // реестр заявок - данные из нескольких таблиц с ограничением по полям
  router.get("/trails", trails.getlist);

  // все поля записи
  router.get("/trail/:id", trails.getrec);

  // Update 
  router.put("/trail/:id", trails.update);

  // Create a new create
  router.post("/trail", trails.create);

}