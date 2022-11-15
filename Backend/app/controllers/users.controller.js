const db = require("../models");
const user = db.tusers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  message: "Content data!"

  const tusers = {
    kod: req.body.kod,
    login: req.body.login,
    password: req.body.password,
    name: req.body.name,
  };

  // Save users in the database
  user.create(tusers)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the table users"
      });
    });
};
exports.dfinduser = (req, res) => {
  user.findAll({
      //      attributes: ['login', 'password', 'name'],
      attributes: ['login', 'name'],
      where: {
        [Op.and]: [
          { login: req.params.id },
          { password: req.params.password }
        ],
      }
      //            where: { login: req.params.id, password: req.params.pasword }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(700).send({
        message: `Cannot find login: ${req.params.id}`
          //              message: err.message || "Some error occurred while retrieving."
      });
    });
};