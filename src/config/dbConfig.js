const mongoose = require("mongoose");
const config = require("./envConfig");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.dbUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
