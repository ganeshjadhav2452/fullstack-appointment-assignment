

const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')

const Appointment = sequelize.define('appointment',{
    id:{
        type:SequelizePackage.INTEGER,
        autoIncrement:true,
        allowNull : false,
        primaryKey:true,      

    },
    name:{
        type:SequelizePackage.STRING,
        allowNull:false,
    },
    phoneNumber:{
        type:SequelizePackage.INTEGER,
        allowNull:false
    }
});

module.exports=  Appointment;