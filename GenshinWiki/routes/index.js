var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Heydzo */
router.get('/Heydzo', function(req, res, next) {
  res.render('mystic', {
    title: "Heydzo",
    picture: "images/Heydzo.png",
    desc: "Досин Сиканоин обладает замечательным умом и проницательностью. Пусть он непредсказуем и порою несносен, нельзя не признать, что он талантлив. Комиссии Тэнрё невероятно повезло, что в её рядах есть такой человек."
  })
});
/* Страница NinGuan */
router.get('/NinGuan', function(req, res, next) {
  res.render('mystic', {
    title: "NinGuan",
    picture: "images/NinGuan.png",
    desc: "Все в Ли Юэ любят посплетничать о Нин Гуан, а кажется, что все про неё всё знают, но на самом деле оказывается, что версия нин Гуан каждого человека довольно сильно отличается от версии другого. Но одна вещь остаётся неизменной: все считают Нин Гуан экстраординарной личностью."
  })
});
/* Страница Reyzor */
router.get('/Reyzor', function(req, res, next) {
  res.render('mystic', {
    title: "Reyzor",
    picture: "images/Reyzor.png",
    desc: "Рэйзор — таинственный мальчик, живущий в Вольфендоме. О нём может рассказать всего лишь горстка модштадтцев. Однако, если верить очевидцам, Рэйзор чрезвычайно проворен и путешествует вместе со стаей волков, вдали от людей."
  })
});


module.exports = router;
