var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Heydzo */
router.get('/Heydzo', function(req, res, next) {
  res.send("<h1>Страница Heydzo</h1>")
});
/* Страница NinGuan */
router.get('/NinGuan', function(req, res, next) {
  res.send("<h1>Страница NinGuan</h1>")
});
/* Страница Reyzor */
router.get('/Reyzor', function(req, res, next) {
  res.send("<h1>Страница Reyzor</h1>")
});


module.exports = router;
