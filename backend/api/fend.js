// Controller to get the current user's basic info
exports.getMe = asyncHandler(async (req, res, next) => {
  // Fetch user by ID from request, only selecting name, level, and hearts
  const user = await User.findById(req.user.id).select('name level hearts');

  // Send a JSON response with selected user data
  res.status(200).json({
    success: true,
    data: {
      name: user.name,
      level: user.level,
      hearts: user.hearts,
    },
  });
});
