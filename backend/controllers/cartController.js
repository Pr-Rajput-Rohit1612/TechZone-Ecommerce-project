const Cart = require('../models/Cart');

// Get user's cart
const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(200).json({ items: [], message: "Cart is empty" });
    }
    
    res.status(200).json({ items: cart.items, message: "Cart fetched" });
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { product } = req.body;
    
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        }]
      });
    } else {
      const existingItem = cart.items.find(item => item.productId === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }
    }
    
    await cart.save();
    res.status(200).json({ items: cart.items, message: "Item added to cart" });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;
    
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    
    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();
    
    res.status(200).json({ items: cart.items, message: "Item removed" });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update quantity (increase/decrease)
const updateQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, action } = req.body;
    
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    
    const item = cart.items.find(item => item.productId === productId);
    
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    
    if (action === 'increase') {
      item.quantity += 1;
    } else if (action === 'decrease') {
      if (item.quantity === 1) {
        cart.items = cart.items.filter(i => i.productId !== productId);
      } else {
        item.quantity -= 1;
      }
    }
    
    await cart.save();
    res.status(200).json({ items: cart.items, message: "Quantity updated" });
  } catch (error) {
    console.error("Update quantity error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    const userId = req.user._id;
    
    await Cart.findOneAndDelete({ userId });
    
    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    console.error("Clear cart error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCart, addToCart, removeFromCart, updateQuantity, clearCart };