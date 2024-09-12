require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4000; // Use port from .env file

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD); // Encode password for safety
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

// Ensure the upload directory exists
const uploadDir = "./upload/images";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// MongoDB connection string
const dbURI = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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

app.use(express.json());
app.use(cors());

// The rest of your backend code remains the same...

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log("Error in connecting to server", error);
  }
});
