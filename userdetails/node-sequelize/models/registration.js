'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    Name: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  
  return Registration;
};

//test comment hai mam
