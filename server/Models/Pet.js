const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
    
    },
    image: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT
    },
    location: {
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
    //quiz_id gets assigned to pet when it is matched
    quiz_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Pet',
            key: 'id'
        }
    }
    
},
    {
        sequelize,
        freezeTableName: true,
        timestamps: false, 
        underscored: true,
        modelName: 'Pet'
    });


module.exports = Pet;