const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

app.use(express.json());
app.use(cors());

// Ensure the upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Correct MongoDB connection string with URL-encoded password
const dbPassword = encodeURIComponent("Harish2004@");
const dbURI = `mongodb+srv://harishsemwal581:${dbPassword}@cluster0.l95x6.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
    default: Date.now(),
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

// Creating a new product
app.post("/addproduct", async (req, res) => {
  try {
    const { name, image, category, new_price, old_price } = req.body;

    // Validate request body
    if (!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product = products[products.length - 1];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id,
      name,
      image,
      category,
      new_price,
      old_price,
    });

    console.log(product);
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
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    message: "Product deleted successfully",
  });
});

// Create API for getting all products.
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
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

// Creating end point for registering the user
app.post('/signup', async (req, res) => {
  let check = await Users.findOne({email: req.body.email});
  if(check) {
    return res.status(400).json({
      success: false,
      errors: 'Exsting User Found',
      message: "Email already exists"
    });
  }
  let cart = {};
  for(let i = 0; i < 300; i++){
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  })
  await user.save();

  // JWT
  const data = {
    user : {}
  }
})




app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error in connecting to MongoDB", error);
  }
});
