const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota para /api/products
routes.get('/products', ProductController.index);

module.exports = routes;