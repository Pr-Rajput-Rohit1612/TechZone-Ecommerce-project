const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, getAllOrders } = require('../controllers/orderController');
const protect = require('../middleware/authMiddleware');

// Create new order
router.post('/', protect, createOrder);

// Get order by ID
router.get('/:id', protect, getOrderById);

// Optional: Get all orders for a user
router.get('/', protect, getAllOrders);

module.exports = router;
