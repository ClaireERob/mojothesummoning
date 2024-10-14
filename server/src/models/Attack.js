const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/config.js');

class Attack extends Model {}

Attack.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        }, 
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    mojoCost:{
        type: DataTypes.INTEGER,
        allowNull: false
        },
    staminaCost:{
        type: DataTypes.INTEGER,
        allowNull: false
        }
},

{
    sequelize,
    modelName: "Attack"
}); 

module.exports = Attack;