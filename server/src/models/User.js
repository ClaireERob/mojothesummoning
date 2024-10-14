// create your User model here
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/config.js');

class User extends Model {}

User.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    sequelize ,
    modelName: "User"
})

module.exports = User; 