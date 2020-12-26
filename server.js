const express = require("express");
const dotenv = require("dotenv"); // use our config file
const colors = require("colors");
const morgan = require("morgan"); // logging
const connectDB = require("./config/db"); // connect mongo file

// load config
dotenv.config({ path: "./config/config.env" });

// connect to mongodb
connectDB();

// create express server
const app = express();

// body parser to parse req.body data
app.use(express.json());

// import routes & use routes file
const transactions = require("./routes/transactionsRoutes");
app.use("/api/v1/transactions", transactions); //connect routes file

// connect server
const PORT = process.env.PORT; // config contants
app.listen(PORT, console.log(`Server running in: ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));
