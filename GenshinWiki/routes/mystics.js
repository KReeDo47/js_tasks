var express = require('express');
var router = express.Router();
var Mystic = require("../models/mystic").Mystic;
var checkAuth = require("./../middleware/checkAuth.js")
var async = require("async")




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с mystics')
});

/* Страница мистиков */
router.get('/:nick', checkAuth,function(req, res, next) {
  Mystic.findOne({nick:req.params.nick}, function(err,Mystic){ 
      if(err) return next(err)
      if(!Mystic) return next(new Error("Нет такого мистика в этой игре"))
      res.render('Mystic', {
          title: Mystic.title,
          picture: Mystic.avatar,
          desc: Mystic.desc
      })
  })
})

module.exports = router;