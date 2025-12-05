const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_URL;
    if (!uri) throw new Error('MongoDB connection URI not found in environment variables');
    const conn = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;