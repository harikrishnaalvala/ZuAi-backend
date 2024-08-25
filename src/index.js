const app = require("./app");
const { connectToDatabase } = require("./config/dbConfig.js");
const config = require("./config/envConfig.js");

connectToDatabase();

app.listen(config.port, () => {
  console.log(
    `Server is running on port ${config.port} in ${config.nodeEnv} mode`
  );
});
