const { db, DataTypes, Model } = require('../db/config.js');

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
    sequelize: db,
    modelName: "Card"
})