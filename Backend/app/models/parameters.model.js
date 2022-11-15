// набор справочников группируемых по type
module.exports = (sequelize, DataTypes) => {
  const parameters = sequelize.define("parameters", {
    type: DataTypes.INTEGER,
    kod: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    timestamps: false, // отключает создание полей "createAt и updatedAt" 
  }, {
    indexes: [{
      name: 'type',
      fields: ['type'],
    }]
  })
  return parameters;
};
//timestamps: false, // отключает создание полей "createAt и updatedAt"
//timestamps: true,
//    // Отключаем `createdAt`
//    createdAt: false,
//    // Изменяем название `updatedAt`
//    updatedAt: 'updateTimestamp',
//        {
//          type: DataTypes.UUID,  //UUID может генерироваться автоматически:
//          defaultValue: Sequelize.UUIDV4
//        }