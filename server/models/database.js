// Using module.exports
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;
const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using Mongoose");
  } catch (err) {
    console.log("Error while connecting to DB");
    console.error(err);
  }
};

module.exports = connectUsingMongoose;
