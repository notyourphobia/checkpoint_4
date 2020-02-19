'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attended = sequelize.define('Attended', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Attended.associate = function(models) {
    Attended.belongsTo(models.All_Shows)
  };
  return Attended;
};