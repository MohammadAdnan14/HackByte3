const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name
  };

  if (req.file) {
    fieldsToUpdate.profileImage = req.file.filename;
  }

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

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

  if (level < 0 || level > 3) {
    return next(new ErrorResponse('Level must be between 0 and 3', 400));
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { level },
    {
      new: true,
      runValidators: true
    }
  );

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

  if (hearts < 0 || hearts > 3) {
    return next(new ErrorResponse('Hearts must be between 0 and 3', 400));
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { hearts },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    success: true,
    data: user
  });
});
