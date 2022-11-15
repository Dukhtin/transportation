const db = require("../models");
const parameter = db.tparameters;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
exports.create = (req, res) => {

  if (!req.body.parameter_kod) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  message: "Content data!"
  const _parameter = req.body

  parameter.create(_parameter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the table parameters"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  parameter.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated parameters successfully"
        });
      } else {
        res.send({
          message: `Cannot update parameters with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating parameters id=" + id
      });
    });
};

exports.getlist = (req, res) => {
  db.sequelize.query( //- необработанные запросы
      'SELECT kod,name\
      FROM parameters \
      where type =:ptype\
      ', {
        replacements: { ptype: req.params.type },
        type: QueryTypes.SELECT,
      })
    .then(data => {
      //      data => { res.send(data) };
      //      res.send(data);
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find parameters with type=${req.params.type}.`
        });
      }



    })
    .catch(err => {
      console.log("error 100:Cannot find parameters")
      res.status(100).send({
        message: "Cannot find parameters"
      });
    });
};