const express = require('express');
const { getCart, addToCart, removeFromCart, updateQuantity, clearCart } = require('../controllers/cartController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// GET /api/cart - Get user's cart
router.get('/', protect, getCart);

// POST /api/cart/add - Add item to cart
router.post('/add', protect, addToCart);

// POST /api/cart/remove - Remove item from cart
router.post('/remove', protect, removeFromCart);

// POST /api/cart/update - Update quantity
router.post('/update', protect, updateQuantity);

// DELETE /api/cart/clear - Clear cart
router.delete('/clear', protect, clearCart);

module.exports = router;