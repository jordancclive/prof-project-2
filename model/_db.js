const Sequelize = require('sequelize');
module.exports = new Sequelize('postgres://localhost:5432/prof-project-2', {
  logging: false
});
