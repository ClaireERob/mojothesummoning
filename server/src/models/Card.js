const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/config.js');

class Card extends Model {}

Card.init({
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
    mojo:{
        type: DataTypes.INTEGER,
        allowNull: true
        },
    stamina:{
        type: DataTypes.INTEGER,
        allowNull: true
        },
    imgUrl:{
        type: DataTypes.INTEGER,
        allowNull: true
        }

},


{
    sequelize,
    modelName: "Card"
});

module.exports = Card;