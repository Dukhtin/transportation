module.exports = (sequelize, DataTypes) => {
  const trails = sequelize.define("trails", {
    trail_number: {
      type: DataTypes.STRING,
      allowNull: false, //запрещает ввод нулевых значений
    },
    trail_date: DataTypes.DATEONLY, //PG,MySQL,MSSQL - тип DATE
    trail_time: DataTypes.TIME,
    carsid: DataTypes.INTEGER, //тип груз/трансфер
    driverid: DataTypes.INTEGER, //статус(зарегистрирован /принят/ожидает/отклонена/распределена/завершена ()  назначен- включен в заказ  
  }, )
  return trails;
};