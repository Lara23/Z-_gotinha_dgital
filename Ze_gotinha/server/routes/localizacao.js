var express = require('express');
var router = express.Router();

/* GET localizacao page. */
router.get('/localizacao', function(req, res, next) {
  res.render('localizacao', { title: 'localizacao' });
});

module.exports = router;
