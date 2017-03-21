const Sequelize = require('sequelize');
const config = require('../config');
const db = new Sequelize(config.DATABASE_URL, {
  logging: false
});

db.sync();

module.exports = db;
