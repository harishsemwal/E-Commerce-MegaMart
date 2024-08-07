const Product = require("../models/productModel");



//create Product ----> Admin side
exports.createProduct = async(req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}




// getAll Products: 

exports.getAllProducts = async(req, res) => {
    const products = await Product.find()
    res.status(200).json({ 
        success: true,
        products
    });
};
