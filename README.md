# TechZone - E-Commerce Platform

A full-stack e-commerce application for selling fashion,  electronics and tech products. Built with modern technologies including React + vite, Node.js, MongoDB, and Tailwind CSS.

## 🌟 Features

- **Product Management**: Browse, search, and filter items
- **User Authentication**: Secure user registration and login
- **Shopping Cart**: Add/remove items and manage quantities
- **Order Management**: Place orders and track order history
- **User Profile**: View and manage user profile
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Real-time Updates**: Toast notifications for user actions
- **Location Detection**: Automatic location detection using Geolocation API

## 📁 Project Structure

```
techZone/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Context API for state management
│   │   ├── assets/          # Images and styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── backend/                  # Node.js + Express backend
    ├── controllers/         # Business logic
    ├── models/             # MongoDB schemas
    ├── routes/             # API routes
    ├── middleware/         # Custom middleware
    ├── config/             # Database configuration
    ├── server.js
    └── package.json
```

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **React Hot Toast** - Notifications
- **Lucide React** - Icons
- **React Slick** - Carousel component

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## 🔧 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed):
```
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products?category=...` - Filter by category

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove item from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order details

## 🎨 Key Pages

- **Home** - Landing page with featured products
- **Products** - Product listing with filters and pagination
- **Product Details** - Single product page with reviews
- **Cart** - Shopping cart management
- **Checkout** - Order creation
- **Orders** - Order history and tracking
- **Contact** - Contact form and support info
- **About** - Company information

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes with middleware
- CORS configuration
- Environment variables for sensitive data

## 📝 Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run seed     # Seed database with sample products
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please contact us at support@techzone.com

## 🙏 Acknowledgments

- Tailwind CSS for styling utilities
- React community for excellent documentation
- MongoDB for reliable database
- All contributors and testers
