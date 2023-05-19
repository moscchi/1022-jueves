const express = require('express');
const { getProduct } = require('../../controller/product/getProduct');
const { addProduct } = require('../../controller/product/addProduct');

const router = express.Router();

router.get('/product', getProduct)
router.post('/product', addProduct)

module.exports = router;