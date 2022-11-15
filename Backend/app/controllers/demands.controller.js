const db = require("../models");
const demand = db.tdemands;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
exports.create = (req, res) => {
  // Validate request

  if (!req.body.demand_number) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  message: "Content data!"
  const _demand = req.body

  demand.create(_demand)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the table demands"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  demand.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated demands successfully"
        });
      } else {
        res.send({
          message: `Cannot update demands with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating demands id=" + id
      });
    });
};

exports.getlist = (req, res) => {
  db.sequelize.query( //- необработанные запросы
      //    'SELECT *  \  // при больших объемах выборку лучше сократить
      'SELECT dm.id,dm.demand_number,dm.demand_date,\
              dm.from_adress,dm.to_address,\
              par1.name as type,par2.name as status,par3.name as source,dm.accountid,\
              ac.phone\
      FROM demands dm \
      left join accounts ac \
      on dm.accountid = ac.id  \
      left join parameters par1 \
        on dm.type   = par1.kod and par1.type=1 \
      left join parameters par2 \
        on dm.status = par2.kod and par2.type=2 \
      left join parameters par3 \
        on dm.source = par3.kod and par3.type=3  \
        ', {
        type: QueryTypes.SELECT,
      })
    .then(data => {
      data => { res.send(data) };
      res.send(data);
    })
    .catch(err => {
      console.log("error 100:Cannot find demands")
      res.status(100).send({
        message: "Cannot find demands"
      });
    });
};
exports.getdemandfortrail = (req, res) => {
  db.sequelize.query( //- необработанные запросы
      'SELECT dm.*,ac.name,ac.phone,ac.mail\
        FROM demands dm\
        left join accounts ac \
        on dm.accountid = ac.id  \
        where dm.trailsid = :ptrailsid\
      ', {
        replacements: { ptrailsid: req.params.id },
        type: QueryTypes.SELECT,
      })
    .then(data => {
      data => { res.send(data) };
      res.send(data);
    })
    .catch(err => {
      console.log("error 100:Cannot find demands")
      res.status(100).send({
        message: "Cannot find demands"
      });
    });
};
exports.getrec = (req, res) => {
  demand.findByPk(req.params.id)
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
      console.log("error 100:Cannot find demands")
      res.status(100).send({
        message: "Cannot find demands"
      });
    });
};

//https://my-js.org/docs/guide/sequelize/
//someAttr: {
//  // Основные
//  [Op.eq]: 3,       // = 3
//  [Op.ne]: 4,       // != 4
//  [Op.is]: null,
//  find - получение первой записи
//  findAll - получение всех записей
//  findOrCreate
//  indOrCreate
//  demand.findByPk(id)         // запись по первичому ключу
//sequelize.query() - необработанные запросы
//const { QueryTypes } = require('sequelize')
//const users = await sequelize.query('SELECT * FROM users', {
//  type: QueryTypes.SELECT,// тип запроса - выборка
//sequelize.query('SELECT * FROM projects WHERE status = :status', {
//  replacements: { status: 'active' },
//  type: QueryTypes.SELECT,
//// Замена производится при совпадении с любым значением из массива
//sequelize.query('SELECT * FROM projects WHERE status IN(:status)', {
//  replacements: { status: ['active', 'inactive'] },
//  type: QueryTypes.SELECT,
//})
//// Замена выполняется для всех пользователей, имена которых начинаются с `J`
//sequelize.query('SELECT * FROM users WHERE name LIKE :search_name', {
//  replacements: { search_name: 'J%' },
//  type: QueryTypes.SELECT,
//})