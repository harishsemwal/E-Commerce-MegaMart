const express = require('express');
const { getAllProducts, createProduct} = require('../controllers/productController');
const router = express.Router();

router.route('/Product').get(getAllProducts);

router.route('/Product/new').post(createProduct);


module.exports = router;
