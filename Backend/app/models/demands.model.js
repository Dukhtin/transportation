module.exports = (sequelize, DataTypes) => {
  const demands = sequelize.define("demands", {
    demand_number: {
      type: DataTypes.STRING,
      allowNull: false, //запрещает ввод нулевых значений
      comment: 'Номер заявки'
    },
    // integer(INTEGER),int4 (4 байта)  -2147483648 до +2147483647
    // smallint,int2  -32768 до +32767
    // bigint(BIGINT ),,int8 -9223372036854775808 до +9223372036854775807
    demand_date: DataTypes.DATEONLY, //PG,MySQL,MSSQL - тип DATE
    demand_time: DataTypes.TIME,
    from_adress: DataTypes.STRING,
    from_coordinates: DataTypes.STRING,
    to_address: DataTypes.STRING,
    to_coordinates: DataTypes.STRING,
    type: DataTypes.INTEGER, //тип груз/трансфер
    status: DataTypes.INTEGER, //статус(зарегистрирован /принят/ожидает/отклонена/распределена/завершена ()  назначен- включен в заказ  
    source: DataTypes.INTEGER, // источник заявки Тел/email/сайт/ЛК/МП/чатбот
    accountid: DataTypes.INTEGER, // т. accounts
    trailsid: DataTypes.INTEGER, // т. trails
    //      accountid: {
    //        type: DataTypes.INTEGER, //{ type: Sequelize.STRING },
    //        //// для внешних ключей  
    //        //// ссылка на другую модель
    //        model: accounts,
    //        // название колонки модели-ссылки с первичным ключом
    //        key: 'id',
    //      },
  }, {
    indexes: [{
      name: 'accountid',
      fields: ['accountid']
    }, {
      name: 'trailsid',
      fields: ['trailsid'],
    }, ]
  })
  return demands;
};