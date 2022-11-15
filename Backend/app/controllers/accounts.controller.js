const db = require("../models");
const account = db.taccounts;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');

exports.create = (req, res) => {
  // Validate request
  if (!req.body.account_phone) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  message: "Content data!"
  account.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(100).send({
        message: err.message || "Some error occurred while creating the table accounts"
      });
    });
};

exports.getlist = (req, res) => {
  db.sequelize.query(
      'SELECT * \
      FROM accounts \
      ', {
        type: QueryTypes.SELECT,
      })
    .then(data => {
      data => { res.send(data) };
      res.send(data);
    })
    .catch(err => {
      res.status(100).send({
        message: "`Cannot find accounts"
      });
    });
};
exports.getrecacc = (req, res) => {
  const id = req.params.id;
  account.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find demand with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(100).send({
        message: "Cannot find demands"
      });
    });
};