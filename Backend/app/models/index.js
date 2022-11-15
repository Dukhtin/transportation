const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

//try {
//  await sequelize.authenticate();
//  console.log('Соединение с БД было успешно установлено')
//} catch (e) {
//  console.log('Невозможно выполнить подключение к БД: ', e)
//}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.taccounts = require("./accounts.model.js")(sequelize, DataTypes);
db.tdemands = require("./demands.model.js")(sequelize, DataTypes);
db.tdrivers = require("./drivers.model.js")(sequelize, DataTypes);
db.tcars = require("./cars.model.js")(sequelize, DataTypes);
db.ttrails = require("./trails.model.js")(sequelize, DataTypes);
db.tparameters = require("./parameters.model.js")(sequelize, DataTypes);
db.tusers = require("./users.model.js")(sequelize, DataTypes);

module.exports = db;