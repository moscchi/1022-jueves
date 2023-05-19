const express = require('express');
const { getEjemplo } = require('../controller/controller');

const router = express.Router();

router.get('/ejemplo', getEjemplo)

module.exports = router;