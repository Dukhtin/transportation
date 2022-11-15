module.exports = (router) => {
  const demands = require("../controllers/demands.controller.js");

  // реестр заявок - данные из нескольких таблиц с ограничением по полям
  router.get("/demands", demands.getlist);

  // все поля записи
  router.get("/demand/:id", demands.getrec);

  // все записи заявок одного заказа
  router.get("/demandfortrail/:id", demands.getdemandfortrail);

  // Update 
  router.put("/demand/:id", demands.update);

  // Create a new create
  router.post("/demand", demands.create);

  //    router.get('/dtest', function (req, res) {
  //      res.send('test1');
  //    });

}