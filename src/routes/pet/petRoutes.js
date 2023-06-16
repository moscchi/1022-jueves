const express = require('express');
const { getPetsController, getAdminPetsController } = require('../../controller/pet/petController');
const { authValidationMiddleware, authAdminValidationMiddleware } = require('../../utils/middlewares/authValidationMiddleware');
const { tokenValidate } = require('../../utils/middlewares/tokenValidate');
const { tokenAdminValidate } = require('../../utils/middlewares/tokenAdminValidate');
const router = express.Router();

router.get('/',tokenValidate ,getPetsController);
router.get('/admin', tokenAdminValidate ,getAdminPetsController);

module.exports = router;