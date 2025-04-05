const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect using the MongoDB URI from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // Log the host on successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error and exit process if connection fails
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; // Export the connection function
