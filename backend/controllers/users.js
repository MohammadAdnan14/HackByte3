const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  // Prepare fields to update
  const fieldsToUpdate = {
    name: req.body.name
  };

  // If profile image is uploaded, add filename to update fields
  if (req.file) {
    fieldsToUpdate.profileImage = req.file.filename;
  }

  // Update user document and return updated version
  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  // Send success response with updated user data
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Update user level
// @route   PUT /api/users/level
// @access  Private
exports.updateLevel = asyncHandler(async (req, res, next) => {
  const { level } = req.body;

  // Validate level value
  if (level < 0 || level > 3) {
    return next(new ErrorResponse('Level must be between 0 and 3', 400));
  }

  // Update user level
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { level },
    {
      new: true,
      runValidators: true
    }
  );

  // Respond with updated user data
  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Update user hearts
// @route   PUT /api/users/hearts
// @access  Private
exports.updateHearts = asyncHandler(async (req, res, next) => {
  const { hearts } = req.body;

  // Validate hearts value
  if (hearts < 0 || hearts > 3) {
    return next(new ErrorResponse('Hearts must be between 0 and 3', 400));
  }

  // Update user hearts
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { hearts },
    {
      new: true,
      runValidators: true
    }
  );

  // Respond with updated user data
  res.status(200).json({
    success: true,
    data: user
  });
});
