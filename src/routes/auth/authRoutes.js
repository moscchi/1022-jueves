const express = require('express');
const { loginController } = require('../../controller/auth/authController');
const router = express.Router();

router.post('/', loginController);

module.exports = router;