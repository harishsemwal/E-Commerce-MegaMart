const Product = require("../models/productModel");
// Admin Side 
exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
};


// getAll Products: 

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ 
      success: true,
      products
  });
};



// update Product ----> Admin side
exports.updateProduct = async (req, res, next) => {
  try {
      let product = await Product.findById(req.params.id);
  
      if (!product) {
          return res.status(404).json({
              success: false,
              message: "Product not found"
          });
      }
  
      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false
      });
  
      res.status(200).json({
          success: true,
          product
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};


// Delelte product admin

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
      return res.status(404).json({
          success: false,
          message: "Product not found"
      });
  }

  await product.remove();

  res.status(200).json({
      success: true,
      message: "Product deleted successfully"
  });
};

// Get Single Product Admin

exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
      return res.status(404).json({
          success: false,
          message: "Product not found"
      });
  }

  res.status(200).json({
      success: true,
      product
  });
};