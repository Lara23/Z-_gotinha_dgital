var express = require('express');
var router = express.Router();

/* GET localizacao page. */
router.get('/', function(req, res, next) {
	// busca no banco de dados
	res.send(colocar  informações do posto aqui);
  res.render('localizacao', { title: 'localizacao' });
});

module.exports = router;
