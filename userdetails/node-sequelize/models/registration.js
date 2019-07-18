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
//>>>>>>> 4e06afcac50ff3e40c9ffd1df49537f58817d0e4
//Naveen varudha