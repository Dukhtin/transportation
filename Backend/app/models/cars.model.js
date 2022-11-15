// справочник авто
module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define("cars", {
    brand: DataTypes.STRING,
    gnumber: DataTypes.STRING,
    year: DataTypes.INTEGER,
    img: DataTypes.STRING,
    seats: DataTypes.INTEGER,
    driversid: DataTypes.INTEGER,
  }, {
    timestamps: false, // отключает создание полей "createAt и updatedAt" 
  }, {
    indexes: [{
      name: 'driversid',
      fields: ['driversid'],
    }]
  })
  return cars;
};