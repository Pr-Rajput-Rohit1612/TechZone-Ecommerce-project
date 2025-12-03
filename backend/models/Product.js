const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'jewelery', "men's clothing", "women's clothing"]
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    rate: {
      type: Number,
      default: 4.0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);