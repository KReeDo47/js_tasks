var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect'); 
//  var Mystic = require("../models/mystic").Mystic;
//  var checkAuth = require("./../middleware/checkAuth.js")
var async = require("async")




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с mystics')
});


/* Страница мистиков на MySQL */
router.get('/:nick' ,function(req, res, next) {
  db.query(`SELECT * FROM mystics WHERE mystics.nick = '${req.params.nick}'`, (err, mystics) => {
    if(err) {
      console.log(err);
      if(err) return next(err)
    } else {
      if(mystics.length == 0) return next(new Error("Нет такого мистика в этой игре"))
      var mystic = mystics[0];
      res.render('mystic', {
        title: mystic.title,
        picture: mystic.avatar,
        desc: mystic.about
      })
    }
  })
})


/* Страница мистиков на mongodb*/
// router.get('/:nick', checkAuth,function(req, res, next) {
//  Mystic.findOne({nick:req.params.nick}, function(err,Mystic){ 
//      if(err) return next(err)
//      if(!Mystic) return next(new Error("Нет такого мистика в этой игре"))
//      res.render('Mystic', {
//          title: Mystic.title,
//          picture: Mystic.avatar,
//          desc: Mystic.desc
//      })
// })
// })
// .
module.exports = router;