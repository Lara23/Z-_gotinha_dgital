var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/localizacao', function(req, res, next) {
  res.render('localizacao', { title: 'Texte' });
});

module.exports = router;
