const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // returns promise, so use await
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`Mongo DB connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); // exit with failure (shutdown)
  }
};

module.exports = connectDB;
