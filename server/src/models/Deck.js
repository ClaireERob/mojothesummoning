const { db, DataTypes, Model } = require('../db/config.js');

class Deck extends Model {}

Deck.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },  
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    xp:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    sequelize: db,
    modelName: "Deck"
})

module.exports = Deck;