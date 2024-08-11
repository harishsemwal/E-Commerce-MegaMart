const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const router = express.Router();

router.route('/Product').get(getAllProducts);

router.route('/Product/new').post(createProduct);

router.route('/Product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports = router;
