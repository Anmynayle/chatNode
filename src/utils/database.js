const { Sequelize } = require("sequelize")

const config = require('../config')

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host, //? Variable de entorno del host
    username: config.db.username,//? Variable de entorno del usuario
    password: config.db.password,//? Variable de entorno del contrasena
    database: config.db.dbName //? Variable de entorno del bd
})

module.exports = db