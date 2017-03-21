const db = require('./_db');
const list = db.define('list', {
  item: {
    type: db.Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = list;
