const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/envConfig.js");
const errorHandler = require("./middlewares/errorHandler");

const postRoutes = require("./routes/postRoutes.js");
const usersRoutes = require("./routes/userRoutes.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", postRoutes);
app.use("/api", usersRoutes);

app.use(errorHandler);

module.exports = app;
