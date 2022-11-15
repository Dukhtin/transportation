module.exports = (sequelize, DataTypes) => {
  const demands = sequelize.define("accounts", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mail: DataTypes.STRING,
  }, {
    indexes: [{
      name: 'phone',
      unique: true,
      fields: ['phone']
    }, ]
  })
  return demands;
};