const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, getAllOrders } = require('../controllers/orderController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Create new order
router.post('/', authenticateToken, createOrder);

// Get order by ID
router.get('/:id', authenticateToken, getOrderById);

// Optional: Get all orders for a user
router.get('/', authenticateToken, getAllOrders);

module.exports = router;
