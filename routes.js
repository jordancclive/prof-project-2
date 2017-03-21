const express = require('express');
const router = express.Router();
const Model = require('./model');

router.post('/index', function (req, res, next){
  var item = req.body;
  Model.create({
    item: item
  })
  .then(function(item){
    res.send({item, message: 'Created successfully'});
  })
  .catch(next);
  // res.redirect('/');
})

module.exports = router;
