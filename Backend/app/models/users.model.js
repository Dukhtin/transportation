module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("users", {
    kod: {
      type: DataTypes.STRING, //{ type: Sequelize.STRING },
      //// для внешних ключей  
      //// ссылка на другую модель
      // model: account,
      // название колонки модели-ссылки с первичным ключом
      //key: 'id',
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false, //запрещает ввод нулевых значений
      //unique: true, //уникальные значения  - возможна уникальность по нескольким полям   
      comment: 'Комментарий для login'
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    indexes: [{
      name: 'login',
      unique: true,
      fields: ['login']
    }, ]
  });
  return user;
};