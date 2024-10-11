// create your User model here
const { db, DataTypes, Model } = require('../db/config.js');

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
    sequelize: db,
    modelName: "User"
})
