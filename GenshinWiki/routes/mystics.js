var express = require('express');
var router = express.Router();
var Mystic = require("../models/mystic").Mystic;
var async = require("async")




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с mystics')
});

/* Страница мистиков */
router.get("/:nick", function(req, res, next) {
  async.parallel([
    function(callback){
        Mystic.findOne({nick:req.params.nick}, callback)
    },
    function(callback){
        Mystic.find({},{_id:0,title:1,nick:1},callback)
    }
],
  function(err,result){
    if(err) return next(err)
    var mystic = result[0]
    var mystics = result[1] || []
    if(!mystic) return next(new Error("Нет такого мистика в этой игре"))
    res.render('mystic', {
        title: mystic.title,
        picture: mystic.avatar,
        desc: mystic.desc,
        menu: mystics
    });
  })
})

module.exports = router