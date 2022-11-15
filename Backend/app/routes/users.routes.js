module.exports = (router) => {
  const duser = require("../controllers/users.controller.js");

  router.get("/users/:id/:password", duser.dfinduser);
  //    router.get("/dtest", tnew.dfindAll);
  //    router.get('/dtest', function (req, res) {
  //      res.send('test1');
  //    });
}