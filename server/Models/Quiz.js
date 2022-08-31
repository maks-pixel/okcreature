const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model { }

Quiz.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    sex: {
        type: DataTypes.STRING

    },
    ageCategory: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    needs: {
        type: DataTypes.BOOLEAN
    },
    household: {
        type: DataTypes.STRING
    },
    other_pets: {
        type: DataTypes.BOOLEAN
    },
    pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Pet',
            key: 'id'
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'quiz'
    });



module.exports = Quiz;