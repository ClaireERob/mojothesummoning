// add your database connection here
const { Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite'
  });

  module.exports = {
    sequelize,
  };