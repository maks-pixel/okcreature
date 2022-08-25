const { Sequelize, DataTypes, Model } = require('sequelize');
const { formatNamedParameters } = require('sequelize/types/utils');
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
    
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'PET'
    });


module.exports = Pet;