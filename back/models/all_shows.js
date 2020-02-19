'use strict';
module.exports = (sequelize, DataTypes) => {
  const All_Shows = sequelize.define('All_Shows', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    seats: DataTypes.INTEGER
  }, {});
  All_Shows.associate = function(models) {
    All_Shows.hasMany(models.Attended)
  };
  return All_Shows;
};  