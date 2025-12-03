const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const { limit, sort } = req.query;
    let query = Product.find();

    // Sort
    if (sort) {
      if (sort === 'desc') {
        query = query.sort({ id: -1 });
      } else {
        query = query.sort({ id: 1 });
      }
    }

    // Limit
    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const products = await query;
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getCategories,
  getProductsByCategory
};