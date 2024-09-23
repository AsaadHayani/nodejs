const mongoose = require("mongoose");

const connectDB = async () => {
  const url_local = "mongodb://127.0.0.1:27017/db";
  const url_production =
    "mongodb+srv://asaad:12345@cluster0.vcgza.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0";
  try {
    const conn = await mongoose.connect(url_production, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
