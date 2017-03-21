const express = require('express');
const router = express.Router();
const Model = require('./model');

const addItem = (item)=>{
    console.log(item);
    Model.create({
      item: item.item
    })
}

router.post('/index', function (req, res, next){
  addItem(req.body);
  res.redirect('/');
})

module.exports = router;
