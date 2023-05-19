const express = require('express');
const { getUser, addUser, getUserById } = require('../../controller/user/userController');
const checkBooleanMiddleware = require('../../utils/checkBooleanMiddleware');

const router = express.Router();

router.get('/', getUser);
router.get('/:idUser', checkBooleanMiddleware, getUserById);
router.post('/', addUser);

module.exports = router;