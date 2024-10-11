// add your database connection here
const { Sequelize, DataTypes, Model } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite3', 
  });

  module.exports = {
    db,
    DataTypes,
    Model
  };