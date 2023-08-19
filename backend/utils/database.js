const SequelizePackage = require('sequelize')
const mysql = require('mysql2')

const  sequelize = new SequelizePackage('myapp','root','24521365',{dialect:'mysql',host:'localhost'})



module.exports = sequelize