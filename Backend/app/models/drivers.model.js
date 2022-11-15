// справочник водителей
module.exports = (sequelize, DataTypes) => {
  const drivers = sequelize.define("drivers", {
    fio: DataTypes.STRING,
    phone: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    timestamps: false, // отключает создание полей "createAt и updatedAt" 
  }, )
  return drivers;
};