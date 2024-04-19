import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_URI;
// const url = "mongodb://localhost:27017/RecipeHunt";
export const connectUsingMongoose = async () => {
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

