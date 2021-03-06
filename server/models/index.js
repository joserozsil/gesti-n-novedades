"use strict"

var fs        = require("fs")
var path      = require("path")
var Sequelize = require("sequelize")
var env       = process.env.NODE_ENV || "development"
var config    = require('../config/db')[env]

console.log(config);

var sequelize = new Sequelize(config.database, config.username, config.password, config)
var db        = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file !== "index.js")
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db)
  }
})



db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db