const express = require('express');
const { signup, login, profileUser, deleteUser } = require('../controllers/authController');
const protect = require ('../middleware/authMiddleware')
const router = express.Router();

// POST /api/auth/signup - Register new user
router.post('/signup', signup);

// POST /api/auth/login - Login user
router.post('/login', login);

router.get("/profile", protect, profileUser)
router.delete("/delete", protect,deleteUser)


module.exports = router;