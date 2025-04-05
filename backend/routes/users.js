const express = require('express');
const {
  updateProfile,
  updateLevel,
  updateHearts
} = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/auth');
// const { uploadProfileImage } = require('../middleware/upload');

// Update user profile with optional image upload (commented out)
// router.put('/profile', protect, uploadProfileImage, updateProfile);

// Update user level (protected route)
router.put('/level', protect, updateLevel);

// Update user hearts (protected route)
router.put('/hearts', protect, updateHearts);

module.exports = router;
