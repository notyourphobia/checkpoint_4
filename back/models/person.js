'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING
  }, {});
  Person.associate = function (models) {
  };
  return Person;
};