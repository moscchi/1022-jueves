const express = require('express');
const { addUserController, getUserController, getUserByUsernameController } = require('../controller/usuarioController');
const router = express.Router();

router.post('/user', addUserController)
router.get('/user', getUserController)
router.get('/user/:username', getUserByUsernameController)

module.exports = router;