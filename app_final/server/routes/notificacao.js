var express = require('express');
var router = express.Router();

/* GET notificacao page. */
router.get('/notificacao', function(req, res, next) {
	// busca no banco de dados
	res.send({ "tarefas":[{ "horario": "8:00", "dia": "01/08", "tempo": "AM", "combate": "Febre Amarela", "nomeposto": "Cuiabazinho" },

	{ "horario": "11:30", "dia": "17/10", "tempo": "PM", "combate": "HPV",  "nomeposto": "Posto Vila Rosa"}]});
});

module.exports = router;
