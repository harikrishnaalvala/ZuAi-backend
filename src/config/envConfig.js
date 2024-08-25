const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  dbUrl: process.env.DB_URL,
};

module.exports = config;
