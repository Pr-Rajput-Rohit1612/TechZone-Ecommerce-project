const Order = require('../models/Order');

// Create Order
const createOrder = async (req, res) => {
  try {
    const { products, totalAmount, deliveryInfo, promoCode, discount } = req.body;
    const userId = req.user.id; // from auth middleware

    const order = await Order.create({
      user: userId,
      products,
      totalAmount,
      deliveryInfo,
      promoCode,
      discount,
      status: 'Pending'
    });

    res.status(201).json({ order });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error while creating order' });
  }
};

// Get Order by ID
const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate('products.productId'); // populate optional

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Optional: ensure user owns this order
    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }

    res.json(order);
  } catch (error) {
    console.error('Fetch order error:', error);
    res.status(500).json({ message: 'Server error while fetching order' });
  }
};

// Get all orders for a user
const getAllOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Fetch all orders error:', error);
    res.status(500).json({ message: 'Server error while fetching orders' });
  }
};

module.exports = { createOrder, getOrderById, getAllOrders };
