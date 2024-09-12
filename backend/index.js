const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config(); // Load environment variables from .env file

const port = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET; // Using environment variable for JWT secret
const MONGO_URI = process.env.MONGO_URI; // Using environment variable for MongoDB URI

app.use(express.json());
app.use(cors());

// Ensure the upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Corrected MongoDB connection without deprecated options
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.log("Error in connecting to MongoDB:", error);
  });

// API Creation
app.get("/", (req, res) => {
  res.send("Express app is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating upload endpoint for image storage
app.use("/images", express.static(uploadDir));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for Creating Products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Creating a new product
app.post("/addproduct", async (req, res) => {
  try {
    const { name, image, category, new_price, old_price } = req.body;

    if (!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name,
      image,
      category,
      new_price,
      old_price,
    });

    await product.save();
    console.log("Saved");

    res.json({
      success: true,
      name: req.body.name,
      message: "Product saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while saving the product",
    });
  }
});

// Creating API for Delete Products
app.post("/removeproduct", async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ id: req.body.id });
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    console.log("Removed");
    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product",
    });
  }
});

// Create API for getting all products
app.get("/allproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products",
    });
  }
});

// Schema Creating for User Model
const Users = mongoose.model("Users", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: {},
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating endpoint for registering the user
app.post("/signup", async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const cart = {};

    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      success: true,
      message: "User created successfully",
      token,
    });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    });
  }
});

// Creating endpoint for logging in the user
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });
      res.json({
        success: true,
        message: "User logged in successfully",
        token,
      });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "User not found" });
  }
});

// Middleware to fetch user
const fetchUserMiddleware = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Token is not valid" });
  }
};

// Endpoint to add products to cart
app.post("/addtocart", fetchUserMiddleware, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    user.cartData[req.body.id] = (user.cartData[req.body.id] || 0) + 1;
    await Users.findByIdAndUpdate(req.user.id, { cartData: user.cartData });
    res.send("Added to cart successfully");
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Endpoint to remove a product from cart
app.post("/removefromcart", fetchUserMiddleware, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const productId = req.body.id;

    if (userData.cartData[productId]) {
      if (userData.cartData[productId] > 1) {
        userData.cartData[productId] -= 1;
      } else {
        delete userData.cartData[productId];
      }
      await Users.findByIdAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );
      res.send("Removed from cart successfully");
    } else {
      res.status(404).send({ error: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Creating endpoint to get cart data
app.post("/getcart", fetchUserMiddleware, async (req, res) => {
  console.log("GetCart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.send(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) console.log(`Server is running on port ${port}`);
  else console.log("Error occurred, server can't start", error);
});
