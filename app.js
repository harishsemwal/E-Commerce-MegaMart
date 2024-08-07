const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./megamart-backend/routes/ProductRoutes');  
app.use('/api/v1', productRoutes);

module.exports = app;
