const express = require('express');
const { getPetsController, getAdminPetsController } = require('../../controller/pet/petController');
const { authValidationMiddleware, authAdminValidationMiddleware } = require('../../utils/middlewares/authValidationMiddleware');
const router = express.Router();

router.get('/', authValidationMiddleware ,getPetsController);
router.get('/admin', authAdminValidationMiddleware ,getAdminPetsController);

module.exports = router;