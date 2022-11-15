const db = require("../models");
const trail = db.ttrails;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
exports.create = (req, res) => {
  // Validate request

  if (!req.body.trail_number) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  message: "Content data!"
  const _trail = req.body

  trail.create(_trail)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the table trails"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  trail.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated trails successfully"
        });
      } else {
        res.send({
          message: `Cannot update trails with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating trails id=" + id
      });
    });
};

exports.getlist = (req, res) => {
  db.sequelize.query( //- необработанные запросы
      //    'SELECT *  \  // при больших объемах выборку лучше сократить
      'SELECT tr.id,tr.trail_number,tr.trail_date,\
              tr.carsid,ca.gnumber,ca.brand,\
              tr.driverid,dr.fio \
      FROM trails tr \
      left join cars ca \
      on tr.carsid = ca.id \
      left join drivers dr \
        on tr.driverid = dr.id\
        ', {
        type: QueryTypes.SELECT,
      })
    .then(data => {
      data => { res.send(data) };
      res.send(data);
    })
    .catch(err => {
      console.log("error 100:Cannot find trails")
      res.status(100).send({
        message: "Cannot find trails"
      });
    });
};
exports.getrec = (req, res) => {
  trail.findByPk(req.params.id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find trail with id=${id}.`
        });
      }
    })
    .catch(err => {
      console.log("error 100:Cannot find trails")
      res.status(100).send({
        message: "Cannot find trails"
      });
    });
};