const express = require('express');
const {
  register,
  login,
  getMe,
  logout
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

// Register a new user
router.post('/register', register);

// Login user and return token
router.post('/login', login);

// Get current logged-in user (protected route)
router.get('/me', protect, getMe);

// Logout user
router.get('/logout', logout);

module.exports = router;
