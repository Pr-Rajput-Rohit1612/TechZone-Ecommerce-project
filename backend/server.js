const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',  
    'http://localhost:5174',  
    'https://tech-zone-ecommerce-project.vercel.app',  // Production (Vercel URL)
  ],
  credentials: true
})); 


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);


// Root route
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Welcome to TechZone E-commerce API',
    version: '1.0.0',
    endpoints: {
      auth: {
        signup: 'POST /api/auth/signup',
        login: 'POST /api/auth/login'
      },
      products: {
        all: 'GET /api/products',
        single: 'GET /api/products/:id',
        categories: 'GET /api/products/categories',
        byCategory: 'GET /api/products/category/:category'
      },
      orders: {
        create: 'POST /api/orders (Protected)',
        userOrders: 'GET /api/orders/user (Protected)',
        allOrders: 'GET /api/orders (Protected)'
      }
    }
  });
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 TechZone Server is running on port ${PORT}`);
  console.log(`🌐 Local: http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV}`);
});