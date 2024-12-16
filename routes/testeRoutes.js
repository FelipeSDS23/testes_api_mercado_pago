const express = require('express');
const router = express.Router();
const TesteController = require("../controllers/TesteController");

router.get('/', TesteController.showMainPage);
router.get('/compraconcluida', TesteController.compraConcluida);
router.get('/compranaoconcluida', TesteController.compraNaoConcluida);
router.get('/comprapendente', TesteController.compraPendente);
router.get('/checkout', TesteController.checkout);

module.exports = router;